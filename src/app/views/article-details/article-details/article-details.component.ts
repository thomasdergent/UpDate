import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/models/article/article.model';
import { ArticleService } from 'src/app/services/articleService/article.service';
import { ArticleStatusService } from 'src/app/services/articleStatusService/article-status.service';
import { TagService } from 'src/app/services/tagService/tag.service';
import { UserInformationService } from 'src/app/services/userService/user-information.service';
import { CommentService } from '../../../services/commentService/comment.service'
import { ReactionService } from '../../../services/reactionService/reaction.service'
import { Comment } from '../../../models/comment/comment.model'
import { getUserFromLocalStorage, User } from 'src/app/models/user/user.model';
import { Reaction } from 'src/app/models/reaction/reaction.model';
import { Like } from '../../../models/like/like.model';
import { LikeService } from '../../../services/likeService/like.service'

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent implements OnInit {

  article: Article = new Article(0, "", "", "", "", 0, null, 0, null, 0, null);
  comment: string;
  currentLikes: Like[];
  usersLike = [];
  numberLikes = 0;
  currentComment = new Comment("");
  submitted: boolean = false;
  reactions: Reaction[];

  constructor(
    private route: ActivatedRoute,
    private _articleService: ArticleService,
    private _tagService: TagService,
    private _userInformationService: UserInformationService,
    private _articleStatusService: ArticleStatusService,
    private _commentService: CommentService,
    private _reactionService: ReactionService,
    private _likeService: LikeService,
    private router: Router) {

    this.loadArticle();

    this.loadReactions();
    this.getLikes();
  }

  user = getUserFromLocalStorage();

  loadArticle() {
    const articleTitle = this.route.snapshot.paramMap.get('title');
    this._articleService.getArticleByTitlePublished(articleTitle).subscribe(
      result => {
        this.article = result;
      }
    );
  }

  loadReactions() {
    this._reactionService.getReactionsByArticleTitle(this.route.snapshot.paramMap.get('title')).subscribe(
      result => {
        this.reactions = result.reverse();
      }


    );
  }
  getLikes() {
    this._likeService.getLikesByArticleTitle(this.route.snapshot.paramMap.get('title')).subscribe(
      result => {
        this.currentLikes = result;

        for (let i = 0; i < result.length; i++) {
          this.numberLikes++;

        }
      }
    );
  }

  addLikeorDislike() {

    if (this.numberLikes == 0) {
      const like = new Like(1, this.user.userID, this.article.articleID);
      this._likeService.addLike(like).subscribe(
        result => {
          this.getLikes();
        }
      );
    } else {
      for (let i = 0; i < this.currentLikes.length; i++) {
        //ids in andere array steken
        this.usersLike.push(this.currentLikes[i].userID);
      }

      if (this.usersLike.includes(this.user.userID)) {
        this._likeService.deleteLikeByUser(this.user.userID).subscribe(
          result => {
            for (let i = 0; i < this.usersLike.length; i++) {
              if(this.usersLike[i] == this.user.userID){
                this.usersLike.splice(i, 1);
              }
            }
            this.numberLikes = 0;
            this.getLikes();
          }
        )
      } else {
        const like = new Like(1, this.user.userID, this.article.articleID);
        this._likeService.addLike(like).subscribe(
          result => {
            this.numberLikes = 0;
            this.getLikes();
          }
        );
      }
    }
  }


  addComment() {
    //this._commentService.addComment(this.comment).subscribe(data=>{


    //});
    const reaction = new Reaction(this.comment, this.user.userID, this.article.articleID);
    this._reactionService.addReaction(reaction).subscribe(
      result => {
        this.loadReactions();
        this.comment = "";
      }
    );


    /* setTimeout(() => {
       this._commentService.getComment(this.comment.commentID).subscribe(
         result=>{
           this.currentComment=result;
         }
       );
       const reaction = new Reaction(0, this.currentComment, this.user, this.article);
       this._reactionService.addReaction(reaction).subscribe();
     }, 0); 
 */


    //const reaction = new Reaction(0, this.comment, this.user, this.article);
    //this._reactionService.addReaction(reaction).subscribe();
  }

  deleteReaction(id: number) {
    this._reactionService.deleteReaction(id).subscribe(
      result => {
        this.loadReactions();
      }
    );
  }


  ngOnInit(): void {
    this.loadReactions();
  }

}

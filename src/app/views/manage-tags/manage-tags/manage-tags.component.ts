import { Component, OnInit } from '@angular/core';
import { Tag } from 'src/app/models/tag/tag.model';
import { TagService } from 'src/app/services/tagService/tag.service';

@Component({
  selector: 'app-manage-tags',
  templateUrl: './manage-tags.component.html',
  styleUrls: ['./manage-tags.component.scss']
})
export class ManageTagsComponent implements OnInit {

  tags: Tag[];
  tag: Tag = new Tag(0, "");
  currentTag: Tag = new Tag(0, "");
  updateTag: Tag = new Tag(0, "");
  submittedAdd: boolean = false;
  submittedEditTag: boolean = false;
  onSubmitDelete: boolean = false;

  constructor(
    private _tagService: TagService,
  ) {

    setTimeout(function () {
      this.getTags();
    }.bind(this), 500);

  }

  getTags() {
    this._tagService.getTags().subscribe(
      result => {
        this.tags = result;
      }
    );
  }

  openAdd() {
    let modal = document.getElementById('addTag')
    modal.classList.remove('hidden')
    modal.classList.add('show')
  }

  closeAdd() {
    let modal = document.getElementById('addTag')
    modal.classList.remove('show')
    modal.classList.add('hidden')
  }

  closeEdit() {
    let modal = document.getElementById('editTag')
    modal.classList.remove('show')
    modal.classList.add('hidden')
  }

  closeDelete() {
    let modal = document.getElementById('deleteTag')
    modal.classList.remove('show')
    modal.classList.add('hidden')
  }

  onSubmitAdd() {
    this.submittedAdd = true;

    this._tagService.addTag(this.tag).subscribe();

    let modal = document.getElementById('addTag')
    modal.classList.remove('show')
    modal.classList.add('hidden')
    window.location.reload();
  }

  editTag(id: number){
    this._tagService.getTagByID(id).subscribe(
      result=>{
        this.currentTag=result;
      }
    );

    let modal = document.getElementById('editTag')
    modal.classList.remove('hidden')
    modal.classList.add('show')
  }

  onSubmitEditTag(){
    this.submittedEditTag = true;

    this.updateTag= new Tag(this.currentTag.tagID, this.currentTag.name);

    this._tagService.updateTag(this.currentTag.tagID, this.currentTag).subscribe();

    window.location.reload();
  }

deleteTag(id: number){
  this._tagService.getTagByID(id).subscribe(
    result =>{
      this.currentTag=result;
    }
  );

  let modal = document.getElementById('deleteTag')
  modal.classList.remove('hidden')
  modal.classList.add('show')
}

onSubmitDeleteTag(){
  this.onSubmitDelete=true;

  this._tagService.deleteTag(this.currentTag.tagID).subscribe();
  window.location.reload();
}

  ngOnInit(): void {
  }

}

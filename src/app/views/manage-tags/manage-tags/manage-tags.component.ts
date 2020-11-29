import { Component, OnInit } from '@angular/core';
import { AlertService } from 'ngx-alerts';
import { Tag } from 'src/app/models/tag/tag.model';
import { TagService } from 'src/app/services/tagService/tag.service';

@Component({
  selector: 'app-manage-tags',
  templateUrl: './manage-tags.component.html',
  styleUrls: ['./manage-tags.component.scss']
})
export class ManageTagsComponent implements OnInit {

  tags: Tag[];
  tag: Tag = new Tag("");
  currentTag: Tag = new Tag("");
  updateTag: Tag = new Tag("");
  submittedAdd: boolean = false;
  submittedEditTag: boolean = false;
  onSubmittedDelete: boolean = false;

  constructor(
    private _tagService: TagService,
    private alertService: AlertService,
  ) {

    this.getTags();

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

  openEdit(id: number) {
    this._tagService.getTagByID(id).subscribe(
      result => {
        this.currentTag = result;
      }
    );

    let modal = document.getElementById('editTag')
    modal.classList.remove('hidden')
    modal.classList.add('show')
  }

  closeEdit() {
    let modal = document.getElementById('editTag')
    modal.classList.remove('show')
    modal.classList.add('hidden')
  }


  openDelete(id: number) {
    this._tagService.getTagByID(id).subscribe(
      result => {
        this.currentTag = result;
      }
    );

    let modal = document.getElementById('deleteTag')
    modal.classList.remove('hidden')
    modal.classList.add('show')
  }

  closeDelete() {
    let modal = document.getElementById('deleteTag')
    modal.classList.remove('show')
    modal.classList.add('hidden')
  }

  onSubmitAdd() {
    this.submittedAdd = true;

    this._tagService.addTag(this.tag).subscribe(
      result => {
        let modal = document.getElementById('addTag')
        modal.classList.remove('show')
        modal.classList.add('hidden')

        this.tag = new Tag("");
        this.getTags();
        this.alertService.success('Categorie toegevoegd');
      }
    );
  }

  onSubmitEdit() {
    this.submittedEditTag = true;

    this.updateTag = new Tag(this.currentTag.name, this.currentTag.tagID);

    this._tagService.updateTag(this.currentTag.tagID, this.currentTag).subscribe(
      result => {
        let modal = document.getElementById('editTag')
        modal.classList.remove('show')
        modal.classList.add('hidden')

        this.getTags();
        this.alertService.success('Categorie bewerkt');
      }
    );
  }

  onSubmitDelete() {
    this.onSubmittedDelete = true;

    this._tagService.deleteTag(this.currentTag.tagID).subscribe(
      result => {
        let modal = document.getElementById('deleteTag')
        modal.classList.remove('show')
        modal.classList.add('hidden')

        this.getTags();
        this.alertService.success('Categorie verwijderd');
      }
    );
  }

  ngOnInit(): void {
  }

}

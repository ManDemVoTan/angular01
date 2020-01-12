import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular';
  engLish='';
  filStatust = 'eyeAll';
  Vn = '';
  isShow = false;
   arrWords = [
    { id: 1, en: 'action', vn: 'hành động', memorized: true },
    { id: 2, en: 'actor', vn: 'diễn viên', memorized: false },
    { id: 3, en: 'activity', vn: 'hoạt động', memorized: true },
    { id: 4, en: 'active', vn: 'chủ động', memorized: true },
    { id: 5, en: 'bath', vn: 'tắm', memorized: false },
    { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true }
];

constructor() {}
ngOnInit() {
}

addnewWord() {
  this.arrWords.unshift( {
    id: this.arrWords.length +1,
    en: this.engLish,
    vn: this.Vn,
    memorized: false
  })
  this.engLish='';
  this.Vn ='';
  this.isShow = false;
  
}
delete(id: number) {
  let index = this.arrWords.findIndex(x => x.id === id);
  this.arrWords.splice(index, 1);
}
filterWord(memorized: boolean) {
  const dkAll = this.filStatust === 'eyeAll';
  const dkforget = this.filStatust === 'forget' && memorized;
  const dkremembered = this.filStatust === 'remembered' && !memorized;
  return dkAll || dkforget ||dkremembered;
}

}

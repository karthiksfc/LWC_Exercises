import { LightningElement, api } from 'lwc';

export default class StudentTile extends LightningElement {

    @api student = {
        Name: 'Karthik',
        PhotoUrl: '/services/images/photo/003B0FakePictId',
    };

    @api selectedStudentId = '';

    studentClick() {
        const evt = new CustomEvent('studentselected', {
            bubbles: true, composed: true,
            detail: { studentId: this.student.Id }
        });
        this.dispatchEvent(evt);
    }

    get tileSelected() {
        return (this.selectedStudentId === this.student.Id) ? "tile selected" : "tile";
    }

    //renderedCallback() {
    //    console.log('rendering student '+ this.student.Id);
    //}
  
        
}
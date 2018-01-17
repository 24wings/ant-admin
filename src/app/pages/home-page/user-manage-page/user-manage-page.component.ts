import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../lib';
@Component({
  selector: 'app-user-manage-page',
  templateUrl: './user-manage-page.component.html',
  styleUrls: ['./user-manage-page.component.scss']
})
export class UserManagePageComponent implements OnInit {
  users: any[] = [];

  keyword: string;
  _operating = false;
  constructor(public config: ConfigService) { }

  async ngOnInit() {
    this.users = await this.config.fruit.listFruitUsers();
  }
  _allChecked = false;
  _disabledButton = true;
  _checkedNumber = 0;
  _displayData: Array<any> = [];

  _dataSet = [];
  _indeterminate = false;

  _displayDataChange($event) {
    this._displayData = $event;
  }

  _refreshStatus() {
    const allChecked = this._displayData.every(value => value.checked === true);
    const allUnChecked = this._displayData.every(value => !value.checked);
    this._allChecked = allChecked;
    this._indeterminate = (!allChecked) && (!allUnChecked);
    this._disabledButton = !this._dataSet.some(value => value.checked);
    this._checkedNumber = this._dataSet.filter(value => value.checked).length;
  }

  _checkAll(value) {
    if (value) {
      this._displayData.forEach(data => data.checked = true);
    } else {
      this._displayData.forEach(data => data.checked = false);
    }
    this._refreshStatus();
  }

  _operateData() {
    this._operating = true;
    setTimeout(_ => {
      this._dataSet.forEach(value => value.checked = false);
      this._refreshStatus();
      this._operating = false;
    }, 1000);
  }


  isVisible = false;

  showModal = () => {
    this.isVisible = true;
  }

  handleOk = (e) => {
    console.log('点击了确定');
    this.isVisible = false;
  }

  handleCancel = (e) => {
    console.log(e);
    this.isVisible = false;
  }
}

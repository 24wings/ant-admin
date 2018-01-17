import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../lib';
@Component({
  selector: 'app-product-group-manage-page',
  templateUrl: './product-group-manage-page.component.html',
  styleUrls: ['./product-group-manage-page.component.scss']
})
export class ProductGroupManagePageComponent implements OnInit {
  keyword: string;
  name: string;
  images: any[] = [];
  comment: string;
  showRecommand: boolean = true;
  switchValue: boolean = true;
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
  constructor(public config: ConfigService) { }

  async selectFile() {
    let base64 = await this.config.common.selectFile();
    this.images.push(base64);
  }

  _allChecked = false;
  _disabledButton = true;
  _checkedNumber = 0;
  _displayData: Array<any> = [];
  _operating = false;
  _dataSet: any[] = [
    { name: '苹果', children: 12, bussiness: 29.6, state: '可用', createDt: new Date(), },
    { name: '李子', children: 12, bussiness: 29.6, state: '可用', createDt: new Date(), },
    { name: '葡萄', children: 12, bussiness: 29.6, state: '可用', createDt: new Date(), },
    { name: '梨子', children: 12, bussiness: 29.6, state: '可用', createDt: new Date(), },
    { name: '哈密瓜', children: 12, bussiness: 29.6, state: '可用', createDt: new Date(), },
    { name: '西瓜', children: 12, bussiness: 29.6, state: '可用', createDt: new Date(), },
    { name: '南瓜', children: 12, bussiness: 29.6, state: '可用', createDt: new Date(), },
    { name: '苹果', children: 12, bussiness: 29.6, state: '可用', createDt: new Date(), },
    { name: '李子', children: 12, bussiness: 29.6, state: '可用', createDt: new Date(), },
    { name: '葡萄', children: 12, bussiness: 29.6, state: '可用', createDt: new Date(), },
    { name: '梨子', children: 12, bussiness: 29.6, state: '可用', createDt: new Date(), },
    { name: '哈密瓜', children: 12, bussiness: 29.6, state: '可用', createDt: new Date(), },
    { name: '西瓜', children: 12, bussiness: 29.6, state: '可用', createDt: new Date(), },
    { name: '南瓜', children: 12, bussiness: 29.6, state: '可用', createDt: new Date(), },
    { name: '苹果', children: 12, bussiness: 29.6, state: '可用', createDt: new Date(), },
    { name: '李子', children: 12, bussiness: 29.6, state: '可用', createDt: new Date(), },
    { name: '葡萄', children: 12, bussiness: 29.6, state: '可用', createDt: new Date(), },
    { name: '梨子', children: 12, bussiness: 29.6, state: '可用', createDt: new Date(), },
    { name: '哈密瓜', children: 12, bussiness: 29.6, state: '可用', createDt: new Date(), },
    { name: '西瓜', children: 12, bussiness: 29.6, state: '可用', createDt: new Date(), },
    { name: '南瓜', children: 12, bussiness: 29.6, state: '可用', createDt: new Date(), },

  ];
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

  ngOnInit() {

  }


}

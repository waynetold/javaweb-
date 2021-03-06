import React, { Component } from 'react';
import CustomBreadcrumb from '../../components/CustomBreadcrumb';
import TabTable from './components/TabTable';
import { Tab ,Search} from '@icedesign/base';

import './PostList.scss';

export default class PostList extends Component {
  static displayName = 'PostList';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const breadcrumb = [
      { text: '校友管理', link: '' },
      { text: '校友列表', link: '#/post/list' },
    ];
    return (
      <div className="post-list-page">
        <CustomBreadcrumb dataSource={breadcrumb} />

        <TabTable />
      </div>
    );
  }
}


import React from 'react';
import { Spin, Icon } from 'antd';

export default function LoadingIndicator(props) {
    const antIcon = <Icon type="loading-3-quarters" style={{ fontSize: 50, color: 'black' }} spin />;
    return (
        <Spin indicator={antIcon} style = {{display: 'block', textAlign: 'center', marginTop: 30}} />
    );
}
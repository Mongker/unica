import React from 'react';
import style from '../style.module.scss';
import { Button, Collapse, List } from 'antd';
import { CaretRightOutlined, VideoCameraOutlined } from '@ant-design/icons';
// import PropTypes from 'prop-types';
const { Panel } = Collapse;
const data = [
    {
        title: (
            <div style={{ display: 'flex' }}>
                <VideoCameraOutlined style={{ marginTop: 4, marginRight: 10 }} />
                <div>Ant Design Title 1</div>
            </div>
        ),
    },
    {
        title: (
            <div style={{ display: 'flex' }}>
                <VideoCameraOutlined style={{ marginTop: 4, marginRight: 10 }} />
                <div>Ant Design Title 2</div>
            </div>
        ),
    },
    {
        title: (
            <div style={{ display: 'flex' }}>
                <VideoCameraOutlined style={{ marginTop: 4, marginRight: 10 }} />
                <div>Ant Design Title 3</div>
            </div>
        ),
    },
    {
        title: (
            <div style={{ display: 'flex' }}>
                <VideoCameraOutlined style={{ marginTop: 4, marginRight: 10 }} />
                <div>Ant Design Title 4</div>
            </div>
        ),
    },
];
function NoiDung() {
    return (
        <div className={style.panel_group}>
            <Collapse bordered={false} defaultActiveKey={['1']} expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />} className={style.site_collapse_custom_collapse}>
                <Panel header={<div className={style.title_khoa_hoc}>Phần 1: Phát âm tiếng Anh giọng Mỹ</div>} key='1' className='site-collapse-custom-panel'>
                    <List
                        size='small'
                        bordered
                        dataSource={data}
                        renderItem={(item) => (
                            <List.Item
                                actions={[
                                    <Button className={style.btn_hoc_thu}>Học thử</Button>,
                                    <Button type={'text'} className={style.btn_date_video}>
                                        00:23:50
                                    </Button>,
                                ]}
                            >
                                <List.Item.Meta title={<a href='https://ant.design'>{item.title}</a>} />
                            </List.Item>
                        )}
                    />
                </Panel>
                <Panel header={<div className={style.title_khoa_hoc}>Phần 2: Từ vựng theo chủ đề nói kết hợp cách đặt câu hỏi</div>} key='2' className='site-collapse-custom-panel'>
                    <List
                        size='small'
                        bordered
                        dataSource={data}
                        renderItem={(item) => (
                            <List.Item
                                actions={[
                                    <Button className={style.btn_hoc_thu}>Học thử</Button>,
                                    <Button type={'text'} className={style.btn_date_video}>
                                        00:23:50
                                    </Button>,
                                ]}
                            >
                                <List.Item.Meta title={<a href='https://ant.design'>{item.title}</a>} />
                            </List.Item>
                        )}
                    />
                </Panel>
                <Panel header={<div className={style.title_khoa_hoc}>Phần 3: Cụm từ diễn đạt theo chủ đề kết hợp ngữ pháp</div>} key='3' className='site-collapse-custom-panel'>
                    <List
                        size='small'
                        bordered
                        dataSource={data}
                        renderItem={(item) => (
                            <List.Item
                                actions={[
                                    <Button className={style.btn_hoc_thu}>Học thử</Button>,
                                    <Button type={'text'} className={style.btn_date_video}>
                                        00:23:50
                                    </Button>,
                                ]}
                            >
                                <List.Item.Meta title={<a href='https://ant.design'>{item.title}</a>} />
                            </List.Item>
                        )}
                    />
                </Panel>
                <Panel header={<div className={style.title_khoa_hoc}>Phần 4: Tình huống diễn đạt thực tế</div>} key='4' className='site-collapse-custom-panel'>
                    <List
                        size='small'
                        bordered
                        dataSource={data}
                        renderItem={(item) => (
                            <List.Item
                                actions={[
                                    <Button className={style.btn_hoc_thu}>Học thử</Button>,
                                    <Button type={'text'} className={style.btn_date_video}>
                                        00:23:50
                                    </Button>,
                                ]}
                            >
                                <List.Item.Meta title={<a href='https://ant.design'>{item.title}</a>} />
                            </List.Item>
                        )}
                    />
                </Panel>
            </Collapse>
        </div>
    );
}

NoiDung.propTypes = {};

NoiDung.defaultProps = {};

export default NoiDung;

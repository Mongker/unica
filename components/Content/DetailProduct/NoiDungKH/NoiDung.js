import React from 'react';
import { Button, Collapse, List, Modal } from 'antd';
import { CaretRightOutlined, VideoCameraOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import useStudyProgramBase from '../../../hooks/LogicData/useStudyProgramBase';
import useVideoBase from '../../../hooks/LogicData/useVideoBase';
import VideoPlayBase from '../../../base/VideoPlayBase';
const { Panel } = Collapse;

// styles
import style from '../style.module.scss';
import _style from './styles.module.scss';

function NoiDung({ product_id }) {
    // Hooks
    const { getListStudyProgram, studyProgram } = useStudyProgramBase();
    const { video, getListStudyVideo } = useVideoBase();

    // state
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const [itemStartVideo, setItemStartVideo] = React.useState(null); // objet

    // const
    const arrStudyProgramFilter = studyProgram.filter(
        (item) => (item.product_id = product_id),
    );

    // handle func
    const showModal = (item) => {
        console.log('item', item); // MongLV log fix bug
        setIsModalVisible(true);
        setItemStartVideo(item);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        setItemStartVideo(null);
    };
    const arrVideoOfStudyProgram = (study_program_id) => {
        const arrVideo = video.filter(
            (item) => item.study_program_id === study_program_id,
        );
        return [...arrVideo];
    };

    // Vòng đời
    React.useEffect(() => {
        getListStudyProgram({ product_id, status: 1 });
        getListStudyVideo({ product_id });
    }, []);

    return (
        <div className={style.panel_group}>
            <Collapse
                bordered={false}
                defaultActiveKey={['1']}
                expandIcon={({ isActive }) => (
                    <CaretRightOutlined rotate={isActive ? 90 : 0} />
                )}
                className={style.site_collapse_custom_collapse}
            >
                {arrStudyProgramFilter.map((item) => (
                    <Panel
                        header={<div className={style.title_khoa_hoc}>{item.name}</div>}
                        key={item.id}
                        className='site-collapse-custom-panel'
                    >
                        <List
                            size='small'
                            bordered
                            dataSource={arrVideoOfStudyProgram(item.id)}
                            renderItem={(item) => {
                                const arrAction = [];
                                item.isPreview &&
                                    arrAction.push(
                                        <Button
                                            className={style.btn_hoc_thu}
                                            onClick={() => showModal(item)}
                                        >
                                            Học thử
                                        </Button>,
                                    );
                                return (
                                    <List.Item
                                        actions={[
                                            ...arrAction,
                                            // <Button
                                            //     type={'text'}
                                            //     className={style.btn_date_video}
                                            // >
                                            //     00:23:50
                                            // </Button>,
                                        ]}
                                    >
                                        <List.Item.Meta
                                            title={
                                                <a href='https://ant.design'>
                                                    <div style={{ display: 'flex' }}>
                                                        <VideoCameraOutlined
                                                            style={{
                                                                marginTop: 4,
                                                                marginRight: 10,
                                                            }}
                                                        />
                                                        <div>{item.name}</div>
                                                    </div>
                                                </a>
                                            }
                                        />
                                    </List.Item>
                                );
                            }}
                        />
                    </Panel>
                ))}
            </Collapse>
            {itemStartVideo && (
                <Modal
                    wrapClassName={_style.controller_video}
                    title='Basic Modal'
                    visible={isModalVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    width={900}
                >
                    <VideoPlayBase
                        image_link={itemStartVideo.img}
                        trailer_link={itemStartVideo.link_video}
                    />
                </Modal>
            )}
        </div>
    );
}

NoiDung.propTypes = {
    product_id: PropTypes.number,
};

NoiDung.defaultProps = {};

export default React.memo(NoiDung);

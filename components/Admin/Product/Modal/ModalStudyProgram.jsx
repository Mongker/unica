/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mongker on 05/05/2021
 * @email: monglv36@gmail.com
 * @student_code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
import { Button, Collapse, Drawer, Form, Input, Modal } from 'antd';
import PropTypes from 'prop-types';
import { DeleteOutlined, EditOutlined, SettingOutlined } from '@ant-design/icons';
import { Editor } from '@tinymce/tinymce-react';
// import tinymce from 'tinymce';

import useStudyProgramBase from '../../../hooks/LogicData/useStudyProgramBase';

// styles
import styles from './styles/index.module.scss';

const { Panel } = Collapse;
const layout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 18,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};
function ModalStudyProgram({ refCallBack }) {
    // hooks
    const [form] = Form.useForm();
    const { studyProgram, studyProgramObj, postStudyProgram, getListStudyProgram, putStudyProgram } = useStudyProgramBase();

    // state
    const [visible, setVisible] = React.useState(false);
    const [visibleStudyProgram, setVisibleStudyProgram] = React.useState(false);
    const [TypeStudyProgram, setTypeStudyProgram] = React.useState(0); // MongLV: 0 -- add, 1 -> edit
    const [idEditStudyProgram, setIdEditStudyProgram] = React.useState(null);
    const [dataProduct, setDataProduct] = React.useState(null);
    const [content, setContent] = React.useState('');
    const [keyCollapse, setKeyCollapse] = React.useState(null);

    // Handle Func
    const showDrawer = () => {
        setVisible(true);
    };
    const onChange = (e) => {
        setContent(e.target.getContent());
    };

    const onClose = () => {
        setVisible(false);
    };
    const callback = (key) => {
        console.log('key', key);
        console.log('key[key.length - 1]', key[key.length - 1]);
        setKeyCollapse(key[key.length - 1]);
    };

    const onFinish = (values) => {
        values['content'] = content;
        values['product_id'] = dataProduct['id'];
        if (!TypeStudyProgram) {
            console.log('values', values); // MongLV log fix bug

            postStudyProgram(values);
        } else {
            console.log('values', values); // MongLV log fix bug

            values['id'] = idEditStudyProgram;
            putStudyProgram(values);
        }
        onReset();
    };

    const onReset = () => {
        form.resetFields();
        setVisibleStudyProgram(false);
        setContent(null);
        setTypeStudyProgram(0);
    };

    const onFill = () => {
        form.setFieldsValue({
            note: 'Hello world!',
            gender: 'male',
        });
    };

    const showModal = () => {
        setVisibleStudyProgram(true);
    };

    const handleOk = () => {
        setVisibleStudyProgram(false);
    };

    const handleCancel = () => {
        setVisibleStudyProgram(false);
        onReset();
    };
    const deleteStudy = () => {};

    // const
    const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
    `;

    const studyProgramFilterStatus = studyProgram.filter((item) => item.status);
    // Vòng đời
    React.useEffect(() => {
        refCallBack.current = {
            showDrawer,
            setDataProduct,
        };
    });
    React.useEffect(() => {
        getListStudyProgram();
    }, [dataProduct]);

    // JSX
    const GenExtra = ({ itemStudyProgram }) => (
        <div className={'flex_row'} style={{ justifyContent: 'space-between', alignItems: 'center', width: 50 }}>
            <EditOutlined
                style={{ color: '#0343c6', cursor: 'pointer' }}
                onClick={(event) => {
                    // If you don't want click extra trigger collapse, you can prevent this:
                    event.stopPropagation();
                    setTypeStudyProgram(1);
                    form.setFieldsValue({ ...itemStudyProgram });
                    setVisibleStudyProgram(true);
                    setIdEditStudyProgram(itemStudyProgram.id);
                }}
            />
            <DeleteOutlined
                style={{ color: 'red', cursor: 'pointer' }}
                onClick={(event) => {
                    // If you don't want click extra trigger collapse, you can prevent this:
                    event.stopPropagation();
                    itemStudyProgram.status = itemStudyProgram.status === 1 ? 0 : 1;
                    console.log('itemStudyProgram', itemStudyProgram); // MongLV log fix bug
                    putStudyProgram(itemStudyProgram);
                }}
            />
        </div>
    );
    const title = (
        <div className={'flex_row'} style={{ alignItems: 'center', justifyContent: 'space-around' }}>
            <div className={styles.title}>{dataProduct && dataProduct.name ? 'Quản lý chương trình học: ' + dataProduct.name : 'Quản lý chương trình học:'}</div>
            <Button onClick={() => setVisibleStudyProgram(true)} type='primary'>
                Thêm chương trình học
            </Button>
            <div />
        </div>
    );
    const titleStudyProgram = <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 24 }}> {TypeStudyProgram ? 'Chỉnh sửa chương trình' : 'Thêm chương trình học'}</h1>;

    const componentStudyProgram = (
        <React.Fragment>
            <Form {...layout} form={form} name='control-hooks' onFinish={onFinish}>
                <Form.Item
                    name='name'
                    label='Tên chương trình'
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item name='content' label='Nội dung chương trình'>
                    <Editor
                        // initialValue='<p>This is the initial content of the editor</p>'
                        onChange={onChange}
                        init={{
                            // height: heightApp || windowSize.heightApp,
                            menubar: true,
                            plugins: ['advlist autolink lists link image charmap print preview anchor', 'searchreplace visualblocks code fullscreen', 'insertdatetime media table paste code help wordcount'],
                            toolbar: 'formatselect | bold italic backcolor forecolor | link image |\
                    alignleft aligncenter alignright alignjustify | \
                    bullist numlist outdent indent | code table | removeformat | fullscreen  preview save print help',
                            // toolbar:
                            //     'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist checklist | forecolor backcolor casechange permanentpen formatpainter removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media pageembed template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment',
                            image_title: true,
                            /* enable automatic uploads of images represented by blob or data URIs*/
                            automatic_uploads: true,
                            /*
                              URL of our upload handler (for more details check: https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_url)
                              images_upload_url: 'postAcceptor.php',
                              here we add custom filepicker only to Image dialog
                            */
                            file_picker_types: 'image',
                            /* and here's our custom image picker*/
                            file_picker_callback: function (cb, value, meta) {
                                var input = document.createElement('input');
                                input.setAttribute('type', 'file');
                                input.setAttribute('accept', 'image/*');

                                /*
                                  Note: In modern browsers input[type="file"] is functional without
                                  even adding it to the DOM, but that might not be the case in some older
                                  or quirky browsers like IE, so you might want to add it to the DOM
                                  just in case, and visually hide it. And do not forget do remove it
                                  once you do not need it anymore.
                                */

                                input.onchange = function () {
                                    var file = this.files[0];

                                    var reader = new FileReader();
                                    reader.onload = function () {
                                        /*
                                          Note: Now we need to register the blob in TinyMCEs image blob
                                          registry. In the next release this part hopefully won't be
                                          necessary, as we are looking to handle it internally.
                                        */
                                        var id = 'blobid' + new Date().getTime();
                                        var blobCache = tinymce.activeEditor.editorUpload.blobCache;
                                        var base64 = reader.result.split(',')[1];
                                        var blobInfo = blobCache.create(id, file, base64);
                                        blobCache.add(blobInfo);

                                        /* call the callback and populate the Title field with the file name */
                                        cb(blobInfo.blobUri(), { title: file.name });
                                    };
                                    reader.readAsDataURL(file);
                                };

                                input.click();
                            },
                        }}
                    />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type='primary' htmlType='submit'>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </React.Fragment>
    );

    const componentRight = (
        <div className={'flex_col'} style={{ alignItems: 'center', justifyContent: 'center' }}>
            <div className={styles.title}>
                Phần {Number(keyCollapse) + 1}: {keyCollapse && studyProgramFilterStatus[keyCollapse].name}
            </div>
            <div style={{ padding: 20, width: '100%', overflow: 'auto' }}>{keyCollapse && <div dangerouslySetInnerHTML={{ __html: studyProgramFilterStatus[keyCollapse].content }} />}</div>
        </div>
    );

    return (
        <Drawer style={{ position: 'absolute' }} width={'90%'} title={title} placement='right' onClose={onClose} visible={visible}>
            <div className={styles.controller_study_program}>
                <Collapse onChange={callback} expandIconPosition={'left'}>
                    {studyProgram
                        .filter((item) => item.status)
                        .map((item, index) => (
                            <Panel header={`Phần ${index + 1}: ${item.name}`} key={index} extra={<GenExtra itemStudyProgram={item} />}>
                                {/*<div>{text}</div>*/}
                            </Panel>
                        ))}
                </Collapse>
                <div className={styles.content_right}>{keyCollapse && componentRight}</div>
            </div>
            <Modal title={titleStudyProgram} visible={visibleStudyProgram} onOk={handleOk} onCancel={handleCancel} footer={null} width={1000}>
                {componentStudyProgram}
            </Modal>
        </Drawer>
    );
}

ModalStudyProgram.propTypes = {
    refCallBack: PropTypes.object,
};

ModalStudyProgram.defaultProps = {
    refCallBack: {
        current: null,
    },
};

export default ModalStudyProgram;

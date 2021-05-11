import React from 'react';
import style from './style.module.scss';
import {
    BookOutlined,
    FileSearchOutlined,
    HeartTwoTone,
    HistoryOutlined,
    KeyOutlined,
    MailOutlined,
    PhoneOutlined,
    SaveOutlined,
    SyncOutlined,
    UserOutlined,
    WalletOutlined,
} from '@ant-design/icons';
import { Button, Form, Tabs, Input, Avatar, DatePicker, Radio } from 'antd';
import Footer from '../../Footer/Footer';
import { useRouter } from 'next/router';
// import PropTypes from 'prop-types';
const { TextArea } = Input;
const { TabPane } = Tabs;
const layout = {
    wrapperCol: { span: 24 },
};
function AccountHome() {
    const [value, setValue] = React.useState(1);
    const [form] = Form.useForm();
    const router = useRouter();
    function callback(key) {
        console.log(key);
    }
    const onFinish = (values) => {
        console.log(values);
    };

    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    return (
        <div className={style.form_account}>
            <div className={style.u_dashboard_top}>
                <div className={style.container}>
                    <div className={style.row}>
                        <div className={style.row_content}>
                            <p>Học viên: Lê Văn MONG </p>
                            <div className={style.navbar_collapse}>
                                <Tabs onChange={callback}>
                                    <TabPane
                                        tab={
                                            <span className={style.tab}>
                                                <BookOutlined />
                                                Khóa học
                                            </span>
                                        }
                                        key='1'
                                    >
                                        <div className={style.content_main_user}>
                                            <div className={style.container}>
                                                <div
                                                    style={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        padding: 20,
                                                    }}
                                                >
                                                    <span>
                                                        Chào mừng Lê Văn MONG đến với học
                                                        viện Online Unica. Nơi bạn có thể
                                                        học tập, rèn luyện các kỹ năng
                                                        thông qua hơn 2.000 khóa học
                                                        online được biên tập cẩn thận, chu
                                                        đáo.
                                                        <br /> Bạn muốn tìm kiếm khóa học
                                                        phù hợp? hãy cho chúng tôi biết
                                                        nhu cầu và mong muốn của bạn nhé
                                                    </span>
                                                    <div className={style.div_goi_y}>
                                                        <Button
                                                            className={style.btn_goi_y}
                                                        >
                                                            Gợi ý khóa học cho tôi
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPane>
                                    <TabPane
                                        tab={
                                            <span className={style.tab}>
                                                <UserOutlined />
                                                Hồ sơ cá nhân
                                            </span>
                                        }
                                        key='2'
                                    >
                                        <div className={style.content_main_user}>
                                            <div className={style.container}>
                                                <div className={style.right}>
                                                    <div className={style.panel_default}>
                                                        <div
                                                            className={
                                                                style.panel_heading
                                                            }
                                                        >
                                                            <span
                                                                style={{
                                                                    fontWeight: 'bold',
                                                                    color: ' #333333',
                                                                }}
                                                            >
                                                                <UserOutlined
                                                                    style={{
                                                                        color: ' #333333',
                                                                        marginRight: 10,
                                                                    }}
                                                                />
                                                                Thông tin cá nhân
                                                            </span>
                                                            <div
                                                                className={
                                                                    style.pull_right
                                                                }
                                                            >
                                                                <Button
                                                                    className={
                                                                        style.margin_left
                                                                    }
                                                                    icon={
                                                                        <SyncOutlined />
                                                                    }
                                                                    onClick={() =>
                                                                        router.push(
                                                                            '/newpassword',
                                                                        )
                                                                    }
                                                                >
                                                                    Thay đổi mật khẩu
                                                                </Button>
                                                                <Button
                                                                    className={
                                                                        style.margin_right
                                                                    }
                                                                    icon={<KeyOutlined />}
                                                                >
                                                                    Khóa tài khoản
                                                                </Button>
                                                            </div>
                                                        </div>
                                                        <div className={style.panel_body}>
                                                            <Form
                                                                {...layout}
                                                                form={form}
                                                                name='control-hooks'
                                                                onFinish={onFinish}
                                                            >
                                                                <div
                                                                    style={{
                                                                        display: 'flex',
                                                                    }}
                                                                >
                                                                    <div
                                                                        style={{
                                                                            width: '50%',
                                                                            paddingRight: 20,
                                                                        }}
                                                                    >
                                                                        <div
                                                                            style={{
                                                                                marginBottom: 50,
                                                                                width:
                                                                                    '100%',
                                                                            }}
                                                                        >
                                                                            <div
                                                                                style={{
                                                                                    marginBottom: 20,
                                                                                }}
                                                                            >
                                                                                Chọn ảnh
                                                                                đại diện :
                                                                            </div>
                                                                            <Form.Item
                                                                                name='note'
                                                                                rules={[
                                                                                    {
                                                                                        required: true,
                                                                                    },
                                                                                ]}
                                                                            >
                                                                                <Avatar
                                                                                    size={
                                                                                        150
                                                                                    }
                                                                                    icon={
                                                                                        <UserOutlined />
                                                                                    }
                                                                                />
                                                                            </Form.Item>
                                                                            <div>
                                                                                (Ảnh vuông
                                                                                và nhỏ hơn
                                                                                500KB)
                                                                            </div>
                                                                        </div>
                                                                        <div>
                                                                            <div
                                                                                style={{
                                                                                    marginBottom: 3,
                                                                                }}
                                                                            >
                                                                                Địa chỉ :
                                                                            </div>
                                                                            <Form.Item
                                                                                name='address'
                                                                                rules={[
                                                                                    {
                                                                                        required: true,
                                                                                    },
                                                                                ]}
                                                                            >
                                                                                <TextArea
                                                                                    rows={
                                                                                        4
                                                                                    }
                                                                                />
                                                                            </Form.Item>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        style={{
                                                                            width: '50%',
                                                                            paddingRight: 20,
                                                                        }}
                                                                    >
                                                                        <div
                                                                            style={{
                                                                                display:
                                                                                    'flex',
                                                                            }}
                                                                        >
                                                                            <div
                                                                                style={{
                                                                                    margin:
                                                                                        '5px 15px 15px 0',
                                                                                }}
                                                                            >
                                                                                Username :
                                                                            </div>
                                                                            <Form.Item
                                                                                name='account'
                                                                                rules={[
                                                                                    {
                                                                                        required: true,
                                                                                    },
                                                                                ]}
                                                                            >
                                                                                <label
                                                                                    style={{
                                                                                        fontWeight:
                                                                                            'bold',
                                                                                    }}
                                                                                >
                                                                                    act9875
                                                                                </label>
                                                                            </Form.Item>
                                                                        </div>
                                                                        <div>
                                                                            <div>
                                                                                Họ và tên
                                                                                :
                                                                            </div>
                                                                            <Form.Item
                                                                                name='name'
                                                                                rules={[
                                                                                    {
                                                                                        required: true,
                                                                                    },
                                                                                ]}
                                                                            >
                                                                                <Input />
                                                                            </Form.Item>
                                                                        </div>
                                                                        <div>
                                                                            <div>
                                                                                <MailOutlined
                                                                                    style={{
                                                                                        color:
                                                                                            'red',
                                                                                        marginRight: 5,
                                                                                    }}
                                                                                />{' '}
                                                                                Email :
                                                                            </div>
                                                                            <Form.Item
                                                                                name='email'
                                                                                rules={[
                                                                                    {
                                                                                        type:
                                                                                            'email',
                                                                                    },
                                                                                ]}
                                                                            >
                                                                                <Input />
                                                                            </Form.Item>
                                                                        </div>
                                                                        <div>
                                                                            <div>
                                                                                <PhoneOutlined
                                                                                    style={{
                                                                                        color:
                                                                                            '#5bb369',
                                                                                        marginRight: 5,
                                                                                    }}
                                                                                />{' '}
                                                                                Số điện
                                                                                thoại :
                                                                            </div>
                                                                            <Form.Item
                                                                                name='phone'
                                                                                rules={[
                                                                                    {
                                                                                        required: true,
                                                                                        message:
                                                                                            'Please input your phone number!',
                                                                                    },
                                                                                ]}
                                                                            >
                                                                                <Input />
                                                                            </Form.Item>
                                                                        </div>
                                                                        <div
                                                                            style={{
                                                                                display:
                                                                                    'flex',
                                                                            }}
                                                                        >
                                                                            <div
                                                                                style={{
                                                                                    width:
                                                                                        '50%',
                                                                                }}
                                                                            >
                                                                                <div>
                                                                                    Ngày
                                                                                    sinh :
                                                                                </div>
                                                                                <Form.Item
                                                                                    name='date'
                                                                                    rules={[
                                                                                        {
                                                                                            required: true,
                                                                                            message:
                                                                                                'Please input your phone number!',
                                                                                        },
                                                                                    ]}
                                                                                >
                                                                                    <DatePicker />
                                                                                </Form.Item>
                                                                            </div>
                                                                            <div
                                                                                style={{
                                                                                    width:
                                                                                        '50%',
                                                                                }}
                                                                            >
                                                                                <div>
                                                                                    Giới
                                                                                    tính :
                                                                                </div>
                                                                                <Form.Item
                                                                                    name='date'
                                                                                    rules={[
                                                                                        {
                                                                                            required: true,
                                                                                            message:
                                                                                                'Please input your phone number!',
                                                                                        },
                                                                                    ]}
                                                                                >
                                                                                    <Radio.Group
                                                                                        onChange={
                                                                                            onChange
                                                                                        }
                                                                                        value={
                                                                                            value
                                                                                        }
                                                                                    >
                                                                                        <Radio
                                                                                            value={
                                                                                                1
                                                                                            }
                                                                                        >
                                                                                            Nam
                                                                                        </Radio>
                                                                                        <Radio
                                                                                            value={
                                                                                                2
                                                                                            }
                                                                                        >
                                                                                            Nữ
                                                                                        </Radio>
                                                                                        <Radio
                                                                                            value={
                                                                                                3
                                                                                            }
                                                                                        >
                                                                                            Khác
                                                                                        </Radio>
                                                                                    </Radio.Group>
                                                                                </Form.Item>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            style={{
                                                                                width:
                                                                                    '50%',
                                                                            }}
                                                                        >
                                                                            <Form.Item>
                                                                                <Button
                                                                                    type='primary'
                                                                                    htmlType='submit'
                                                                                    icon={
                                                                                        <SaveOutlined />
                                                                                    }
                                                                                    style={{
                                                                                        backgroundColor:
                                                                                            '#449d44',
                                                                                        border:
                                                                                            '#449d44',
                                                                                        borderRadius: 15,
                                                                                    }}
                                                                                >
                                                                                    Submit
                                                                                </Button>
                                                                            </Form.Item>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPane>
                                    <TabPane
                                        tab={
                                            <span className={style.tab}>
                                                <HeartTwoTone twoToneColor='#eb2f96' />
                                                Yêu thích
                                            </span>
                                        }
                                        key='3'
                                    >
                                        Tab 3
                                    </TabPane>
                                    <TabPane
                                        tab={
                                            <span className={style.tab}>
                                                <FileSearchOutlined />
                                                Khám phá
                                            </span>
                                        }
                                        key='4'
                                    >
                                        Tab 4
                                    </TabPane>
                                    <TabPane
                                        tab={
                                            <span className={style.tab}>
                                                <WalletOutlined />
                                                Trải nghiệm
                                            </span>
                                        }
                                        key='5'
                                    >
                                        Tab 5
                                    </TabPane>
                                    <TabPane
                                        tab={
                                            <span className={style.tab}>
                                                <HistoryOutlined />
                                                Lịch sử đặt hàng
                                            </span>
                                        }
                                        key='6'
                                    >
                                        Tab 6
                                    </TabPane>
                                    <TabPane
                                        tab={
                                            <span className={style.tab}>
                                                <MailOutlined />
                                                Hộp thư
                                            </span>
                                        }
                                        key='7'
                                    >
                                        Tab 7
                                    </TabPane>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

AccountHome.propTypes = {};

AccountHome.defaultProps = {};

export default AccountHome;

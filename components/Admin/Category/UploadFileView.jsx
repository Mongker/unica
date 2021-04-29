/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker on 29/04/2021
 * @email: levanmong.dola.99@gmail.com
 * @phone: +84373668113
 * @slogan: "Mọi thứ đều bắt đầu từ việc nhỏ, những khát vọng phải lớn"
 */

import React from 'react';
import { Upload, message } from 'antd';
import PropTypes from 'prop-types';

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
}

class UploadFileView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            linkFile: '',
        };
    }
    onChange(info) {
        switch (info.file.status) {
            case 'uploading':
                break;
            case 'done':
                message.success('Thêm thành công');
                this.setState({
                    linkFile: info.file.response.fileNameInServer,
                });
                break;
            default:
                message.error(`${info.file.name}`);
                this.setState({
                    linkFile: '',
                });
        }
    }
    render() {
        const { linkFile } = this.state;
        const UpFile = {
            name: 'file',
            action: `http://localhost:2020/api/file/upload`,
            multiple: true,
            onChange: (info) => this.onChange(info),
        };
        const linkFileView = linkFile ? 'http://localhost:2020/api/' + 'file/' + linkFile : 'https://img.icons8.com/cotton/344/image--v1.png';
        console.log('linkFileView', linkFileView); // MongLV log fix bug
        return (
            <Upload {...UpFile} listType='picture-card'>
                {linkFile.length === 0 ? <img alt='example' src={linkFileView} style={{ width: '50px', height: '50px' }} /> : null}
            </Upload>
        );
    }
}
UploadFileView.propTypes = {};
UploadFileView.defaultProps = {};
export default UploadFileView;

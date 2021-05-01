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

// styles
import _styles from './styles/index.module.scss';

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
}

function UploadFileView(props) {
    const { refFunc, Img, styles } = props;
    const [linkFile, setLinkFile] = React.useState('');
    const [fileList, setFileList] = React.useState([]);

    const linkFileView = linkFile ? 'http://localhost:2020/api/' + 'file/' + linkFile : 'https://img.icons8.com/cotton/344/image--v1.png';

    // handle func
    const onChange = (info) => {
        setFileList(info.fileList);
        switch (info.file.status) {
            case 'uploading':
                break;
            case 'done':
                // message.success('Thêm thành công');
                setLinkFile(info.file.response.fileNameInServer);
                break;
            default:
                // message.error(`${info.file.name}`);
                setLinkFile('');
                break;
        }
    };

    // Props
    const UpFile = {
        name: 'file',
        action: `http://localhost:2020/api/file/upload`,
        multiple: true,
        onChange: (info) => onChange(info),
    };

    // Vòng đời
    React.useEffect(() => {
        // Gán ref cho phần tử cha sử dụng lại
        refFunc.current = {
            linkFile,
            setLinkFile,
            setFileList,
        };
    });

    return (
        <div className={styles.upload_file}>
            <Upload {...UpFile} fileList={fileList} listType='picture-card'>
                {linkFile.length <= 0 ? <img alt='example' src={linkFileView} style={{ width: Img.width, height: Img.height }} /> : null}
            </Upload>
        </div>
    );
}
UploadFileView.propTypes = {};
UploadFileView.defaultProps = {
    Img: { width: '50px', height: '50px' },
    styles: _styles,
};
export default React.memo(UploadFileView);

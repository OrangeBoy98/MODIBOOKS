import React, { useState, useEffect } from 'react';
import Header from '../common/Header';

function Services() {
    const [htmlContent, setHtmlContent] = useState('');

    useEffect(() => {
        // 서버에서 HTML 파일을 불러오는 예시
        fetch('http://localhost:3000/mili.html')
            .then(response => response.text())
            .then(data => {
                setHtmlContent(data);
            });
    }, []);

    return (
        <div>
            <Header />
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </div>
    );
}

export default Services;
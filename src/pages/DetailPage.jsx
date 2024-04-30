import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function DetailPage() {
    const { id } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
    // 여기서 데이터 로딩 로직을 구현, 예를 들어 API 호출 등
    // 예시로는 단순한 텍스트만 반환하겠습니다.
    setData(`Details for item with ID: ${id}`);
  }, [id]); // id가 바뀔 때마다 useEffect가 실행됩니다.

    return (
    <div>
        <h1>Detail Page</h1>
        <p>{data}</p>
    </div>
    );
}

export default DetailPage;

import { useNavigate } from 'react-router-dom';

const BackButton = ({ className }) => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1); // 뒤로 가기
    };

    return (
        <img alt='back'
             className={className}
             onClick={handleBack}
             src="http://localhost:3000/images/back.png"
             width="60px"
             height="60px"/>
    );
}

export default BackButton;

import {BrowserRouter as Router, Route, Routes, useNavigate} from 'react-router-dom';
import rendingPageImage from './assets/rending-page.png';

// AniPodConnect 컴포넌트 정의
function AniPodConnect() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="flex flex-col text-center w-[50%]">
                <h1 className="text-2xl font-bold mb-16">Anipod Connect</h1>
                <form className="space-y-12">
                    <div>
                        <label className="block text-lg font-semibold mb-4">단체명/크루명</label>
                        <input type="text" placeholder="단체명/크루명을 입력해주세요" className="border w-full py-2 px-4 rounded"/>
                    </div>
                    <div>
                        <label className="block text-lg font-semibold mb-4">연락처</label>
                        <input type="text" placeholder="연락처를 입력해주세요" className="border w-full py-2 px-4 rounded"/>
                    </div>
                    <div>
                        <label className="block text-lg font-semibold mb-4">이메일</label>
                        <input type="email" placeholder="이메일을 입력해주세요" className="border w-full py-2 px-4 rounded"/>
                    </div>
                    <div>
                        <label className="block text-lg font-semibold mb-4">문의 내용</label>
                        <textarea placeholder="문의 내용을 입력해주세요" className="border w-full py-2 px-4 rounded"/>
                    </div>
                    <button type="submit"
                            className="bg-blue-500 text-white py-2 px-4 w-full hover:bg-blue-700 h-16 rounded-lg">
                        제출하기
                    </button>
                </form>
            </div>
        </div>
    );
}

// 메인 페이지 컴포넌트
function MainPage() {
    const navigate = useNavigate();  // 페이지 이동을 위한 훅

    const handleButtonClick = () => {
        navigate('/connect');  // 버튼을 눌렀을 때 '/connect'로 페이지 전환
    };

    return (
        <div className="relative inline-block">
            <img src={rendingPageImage} alt="Rending Image" className="block mx-auto"/>
            <button
                onClick={handleButtonClick}
                className="absolute bottom-[13%] left-[17%] bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
                Connect
            </button>
            <button
                onClick={handleButtonClick}
                className="absolute bottom-[13%] left-[37%] bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
                Connect
            </button>
            <button
                onClick={handleButtonClick}
                className="absolute bottom-[13%] left-[60%] bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
                Connect
            </button>
            <button
                onClick={handleButtonClick}
                className="absolute bottom-[13%] left-[79%] bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
                Connect
            </button>
        </div>
    );
}

// App.js의 전체 구조
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/connect" element={<AniPodConnect/>}/>
            </Routes>
        </Router>
    );
}

export default App;

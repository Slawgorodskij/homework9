import {Routes, Route} from 'react-router-dom'
import ProfilePage from "./pages/ProfilePage";
import Layout from "./layouts/Layout";
import Page404 from "./pages/Page404";
import MessagesPageContainer from "./pages/messagePage/MessgePageContainer";
import HomePageContainer from "./pages/homePage/HomePageContainer";
import RegisterPage from "./pages/authPage/RegisterPage";
import LoginPage from "./pages/authPage/LoginPage";
import {useSelector} from "react-redux";

function App() {
    const user = useSelector(state => state.user.currentUser);

    return user ?
        (<Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route path={'/'} element={<HomePageContainer/>}/>
                <Route path={'/login'} element={<LoginPage/>}/>
                <Route path={'/register'} element={<RegisterPage/>}/>
                <Route path={'/profile'} element={<ProfilePage/>}/>
                <Route path={'/messages'} element={<MessagesPageContainer/>}/>
                <Route path={'/messages/:chatId'} element={<MessagesPageContainer/>}/>
                <Route path={'/noChat'} element={<Page404/>}/>
                <Route path={'*'} element={<Page404/>}/>
            </Route>
        </Routes>)
        :
        (<Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'/'} element={<HomePageContainer/>}/>
                    <Route path={'/register'} element={<RegisterPage/>}/>
                    <Route path={'/login'} element={<LoginPage/>}/>
                    <Route path={'*'} element={<LoginPage/>}/>
                </Route>
            </Routes>

        )
        ;
}

export default App;


import Header from './Header'

const Layout = ({ Children }) => {
    return (
        <div>
            <div className="header">
                <Header />
            </div>
            <div className="main">{Children}</div>
            <div className="footer">

            </div>

        </div>
    )
}

export default Layout
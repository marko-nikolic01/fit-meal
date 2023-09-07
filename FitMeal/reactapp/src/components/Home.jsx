import UnauthorizedAccess from './UnauthorizedAccess.jsx'

function Home(props) {
    const { theme, isUserSignedIn } = props

    return (
        <>
            {isUserSignedIn
                ? <div>Welcome!</div>
                : <UnauthorizedAccess theme={theme} />
            } 
        </>
    )
}

export default Home
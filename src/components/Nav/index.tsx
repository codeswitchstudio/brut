import { redirectToAuthCodeFlow } from "../../auth"


const Nav = () => {

	const clientId = import.meta.env.CLIENT_ID;

	const handleClick = async () => {
		await redirectToAuthCodeFlow(clientId)
	}

	return (
		<>
		<nav>
			<h1>Brut</h1>
			
			<button onClick={handleClick}>				
				
				Login</button>

		</nav>
		</>
	)
}

export default Nav
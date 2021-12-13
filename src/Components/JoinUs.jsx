// import Counter from "./Components/Counter";

import TodoList from "../Components/TodoList";

const user = true;

const textColor = {
	primary: "text-primary",
	warning: "text-warning",
	danger: "text-danger",
	success: "text-success",
}

const WelcomeGreeting = ()=>(
	<h2 className={textColor.primary}>Welcome!</h2>
)

const FarewellGreeting = ()=>(
	<h2 className={textColor.danger}>User offline</h2>
)

const JoinUs = () => {
    return (
        <>
            <h1 className={textColor.success}>hello</h1>
			{ user ? <WelcomeGreeting/> : <FarewellGreeting/>}

			{/* <Counter/> */}
			
			<TodoList/>
        </>
    )
}

export default JoinUs

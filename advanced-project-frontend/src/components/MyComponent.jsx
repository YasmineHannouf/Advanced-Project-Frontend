import React, { useMemo } from 'react';

function MyComponent({ data }) {
	const expensiveCalculation = useMemo(() => {
		// Perform expensive calculation here
		let result = 0;
		for (let i = 0; i < data.length; i++) {
			result += data[i];
		}
		return result;
	}, [data]);

	return (
		<div>
			<p>Result: {expensiveCalculation}</p>
		</div>
	);
}

// useEffect func component

function ExampleFunctional() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		document.title = `You clicked ${count} times`;
	}, [count]);

	return (
		<div>
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>Click me</button>
		</div>
	);
}

// class component

class ExampleClass extends Component {
	constructor(props) {
		super(props);
		this.state = { count: 0 };
	}

	componentDidMount() {
		document.title = `You clicked ${this.state.count} times`;
	}

	componentDidUpdate() {
		document.title = `You clicked ${this.state.count} times`;
	}

	render() {
		return (
			<div>
				<p>You clicked {this.state.count} times</p>
				<button
					onClick={() =>
						this.setState({ count: this.state.count + 1 })
					}
				>
					Click me
				</button>
			</div>
		);
	}
}

// what if we have a complex project
// and we have about 10 main states
// and we wanted to render A side Effects based on only 2 states
// here it comes the benefit of using hooks in functional
// component over class component

//  functional components are a more modern and
// While class components are still supported in React
// the trend is moving towards functional components and Hooks,
// and it's recommended to use
// them for new projects or when updating existing code.

// class component
<button onClick={() => this.setState({ count: this.state.count + 1 })}>
	Click me
</button>

// functional component
<button onClick={() => setCount(count + 1)}>
	Click me
</button>
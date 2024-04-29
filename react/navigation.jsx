import { createRoot } from 'react-dom/client';

function NavigationBar() {
    // TODO: Implement the function to make the cards of the carousle dynamic
    return <h1>Hello from Test!</h1>;
}

const domNode = document.getElementById('navigation');
const root = createRoot(domNode);
root.render(<NavigationBar />);
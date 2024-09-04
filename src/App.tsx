import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {

    const greeting = async () => {
        let [tab] = await chrome.tabs.query({ active: true });
        chrome.scripting.executeScript({
            target: { tabId: tab.id! },
            func: () => {
                console.log('hello!')
            }
        });
    }

    // OPTION 2

    // async function greeting() {
    //     if (typeof chrome !== "undefined" && chrome.tabs) {
    //         try {
    //             let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    //             chrome.scripting.executeScript({
    //                 target: { tabId: tab.id! },
    //                 func: () => {
    //                     document.body.style.backgroundColor = 'red';
    //                 }
    //             });
    //         } catch (error) {
    //             console.error("Error executing script: ", error);
    //         }
    //     } else {
    //         console.error("chrome.tabs API is not available.");
    //     }
    // }
    
    // document.getElementById('card')!.addEventListener('click', greeting);


    // OPTION 3

    // const greeting = async () => {
    //     if (typeof chrome !== "undefined" && chrome.tabs) {
    //         let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    //         chrome.scripting.executeScript({
    //             target: { tabId: tab.id },
    //             func: () => {
    //                 document.body.style.backgroundColor = 'red';
    //             }
    //         });
    //     } else {
    //         console.error("chrome.tabs API is not available.");
    //     }
    // }


    // OPTION 4

    // OPTION 2

    // async function greeting() {
    //     if (typeof chrome !== "undefined" && chrome.tabs) {
    //         try {
    //             let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    //             chrome.scripting.executeScript({
    //                 target: { tabId: tab.id! },
    //                 func: () => {
    //                     document.body.style.backgroundColor = 'red';
    //                 }
    //             });
    //         } catch (error) {
    //             console.error("Error executing script: ", error);
    //         }
    //     } else {
    //         console.error("chrome.tabs API is not available.");
    //     }
    // }
    
    // document.getElementById('card')!.addEventListener('click', greeting);


    // OPTION 5

    // try {
    //     const cardElement = document.getElementById('card');
    //     if (cardElement) {
    //         cardElement.addEventListener('click', greeting);
    //     } else {
    //         throw new Error("Element with ID 'card' not found.");
    //     }
    // } catch (error) {
    //     console.error(error.message);
    // }


    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Cashtags Trading on X</h1>
            <div className="card">
                <button onClick={greeting}>
                    Click
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    );
}

export default App;

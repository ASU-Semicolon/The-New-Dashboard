import { useState } from "react";
import Dropdown from "./components/dropdown/dropdown.component";
import Card from "./components/card/card.component";
import InputWithLabel from "./components/Input-with-label/Input-with-label.component";
import Loader from "./components/loader/loader.component";
import SearchBar from "./components/search-bar/search.component";

function App() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "4rem",
                backgroundColor: "#000",
                width: "100vw",
                minHeight: "100vh",
                padding: "2rem",
            }}
        >
            <Dropdown
                options={[{ value: "1" }, { value: "2" }, { value: "3" }]}
            />
            <Card title="test" data={{ key1: "value1", key2: "value2" }} />
            <InputWithLabel label="Name" placeholder="Enter your name" />
            <SearchBar />
            <Loader isLoading={true} />
        </div>
    );
}

export default App;

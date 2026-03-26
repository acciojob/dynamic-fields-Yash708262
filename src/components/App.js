import React, { useState } from 'react';

const App = () => {
    const [fields, setFields] = useState([{ name: '', age: '' }]);

    // Function to handle input changes
    const handleChange = (index, event) => {
        const { name, value } = event.target;
        const newFields = [...fields];
        newFields[index][name] = value;
        setFields(newFields);
    };

    // Function to add a new field
    const addField = () => {
        setFields([...fields, { name: '', age: '' }]);
    };

    // Function to remove a field
    const removeField = (index) => {
        const newFields = fields.filter((_, i) => i !== index);
        setFields(newFields);
    };

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(fields);
    };

    return (
        <div>
            <h1>Dynamic Fields Form</h1>
            <form onSubmit={handleSubmit}>
                {fields.map((field, index) => (
                    <div key={index}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={field.name}
                            onChange={(event) => handleChange(index, event)}
                        />
                        <input
                            type="number"
                            name="age"
                            placeholder="Age"
                            value={field.age}
                            onChange={(event) => handleChange(index, event)}
                        />
                        <button type="button" onClick={() => removeField(index)}>Remove</button>
                    </div>
                ))}
                <button type="button" onClick={addField}>Add More Fields</button>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default App;

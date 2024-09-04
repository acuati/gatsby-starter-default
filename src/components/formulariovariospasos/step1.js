import React from 'react';

const Step1 = ({ formData, setFormData, nextStep }) => {
    return (
        <div>
            <h2>Step 1</h2>
            <h3>Introducción de los datos</h3>
            <label>Data:</label>
            <input
                type="text"
                value={formData.data}
                onChange={(e) => setFormData({ ...formData, data: e.target.value })}
            />
            <button onClick={nextStep}>Next</button>
        </div>
    );
};

export default Step1;
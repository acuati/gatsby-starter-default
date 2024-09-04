import React from 'react';

const Step2 = ({ formData, setFormData, prevStep, nextStep }) => {
    return (
        <div>
            <h2>Step 2</h2>
            <h3>Introducción del tamaño</h3>
            <label>Tamaño:</label>
            <input
                type="number"
                value={formData.size}
                onChange={(e) => setFormData({ ...formData, size: e.target.value })}
            />
            <button onClick={prevStep}>Back</button>
            <button onClick={nextStep}>Next</button>
        </div>
    );
};

export default Step2;
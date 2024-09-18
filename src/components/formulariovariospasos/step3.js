import React from 'react';

const Step3 = ({ formData, setFormData, prevStep, nextStep }) => {
    return (
        <div>
            <h2>Step 3</h2>
            <h3>Introducción el color</h3>
            <label>Color:</label>
            <input
                type="color"
                value={formData.color}
                onChange={(e) => setFormData({ ...formData, color: e.target.value })}
            />
            <button onClick={prevStep}>Back</button>
            <button onClick={nextStep}>Next</button>
        </div>
    );
};
export default Step3;
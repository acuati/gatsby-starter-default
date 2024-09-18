import React from 'react';
import FormWithTabs from './formtabs/formwithtabs';

const Step1 = ({ formData, setFormData, nextStep }) => {
    return (
        <div>
            <h2>Step 1</h2>
            <h3>Introducción los Datos</h3>
            <label>Data:</label>
            
            {/* Reemplaza el input con el componente de tabs */}
            <FormWithTabs formData={formData} setFormData={setFormData} />

            <button onClick={nextStep}>Next</button>
        </div>
    );
};

export default Step1;
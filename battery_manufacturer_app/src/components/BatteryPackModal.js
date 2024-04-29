import { Modal, Select, Spin, Input } from 'antd'
import React, {useState} from 'react'
import styled from 'styled-components';
import CustomButton from './Button';
import { cellChemistry } from '../utils/consts';
import Typography from 'antd/es/typography/Typography';
import store, { dataAction } from '../store';
const ColContainer = styled.div`
display: flex;
flex-direction: column;
gap:12px;
box-sizing: border-box;
justify-content: flex-start;
width: 100%;
`;
const RowContainer = styled.div`
display: flex;
flex-direction: row;
gap:12px;
box-sizing: border-box;
align-items: center;
justify-content: space-between;
width: 100%;
`;
const BatteryPackModal = (props) => {
const [formData, setFormData] = useState({});
const [isLoading, setIsLoading] = useState(false);
const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData(values => ({...values, [name]: value}));
}
const handleCreateBatteryPack = () => {
    if(checkKeys("cellChemistry")&& checkKeys("manufacturer")&&
    checkKeys("maxVoltage")&& checkKeys("minVoltage")&&
    checkKeys("power")&& checkKeys("capacity")&&
    checkKeys("ratedCurrent")&& checkKeys("maxTemperature")){
        const data = formData;
        data["batteryPackUniqueId"] = Date.now();
        console.log(data);
        store.dispatch(dataAction.setBatteryPacks(data));
        props.handleCloseBatteryPackModal();
    }  
}

const checkKeys = (type) => {
    if(formData[type]!==null && formData[type]!==undefined && formData[type].trim()!=='') return true;
    return false;
}
const filterOption = (input, option) =>
(option?.label ?? '').toLowerCase().includes(input.toLowerCase());
  return (
    <Modal width={600} title="Create Battery Pack" footer={null} open={props.isOpenBatteryPackModal} onCancel={props.handleCloseBatteryPackModal}>
        <Spin spinning={isLoading}>
            <ColContainer style={{ alignItems:'center' }}>
                <div/>
                <Select
                    value={formData.cellChemistry??null}
                    placeholder="cell chemistry"
                    allowClear
                    style={{width:'100%'}}
                    onChange={(value)=>{
                        setFormData(values => ({...values, ["cellChemistry"]: value}));
                    }}
                    filterOption={filterOption}
                    showSearch
                    optionFilterProp="children"
                    options={cellChemistry.map((item,index)=>{
                        return {
                            value: item,
                            label: item
                        }
                    })}
                    />
                <Input placeholder="manufacturer" value={formData.manufacturer || ''} onChange={handleChange} name='manufacturer'/>

                <RowContainer>
                    <Input addonAfter="V" placeholder="max voltage" value={formData.maxVoltage || ''} onChange={handleChange} name='maxVoltage'/>
                    <Input addonAfter="V" placeholder="min voltage" value={formData.minVoltage || ''} onChange={handleChange} name='minVoltage'/>
                    <Input addonAfter="kWh" placeholder="power" value={formData.power || ''} onChange={handleChange} name='power'/>
                </RowContainer>
                <RowContainer>
                    <Input addonAfter="mAh" placeholder="capacity" value={formData.capacity || ''} onChange={handleChange} name='capacity'/>
                    <Input addonAfter="A" placeholder="rated current" value={formData.ratedCurrent || ''} onChange={handleChange} name='ratedCurrent'/>
                    <Input addonAfter="° C" placeholder="max temperature" value={formData.maxTemperature || ''} onChange={handleChange} name='maxTemperature'/>
                </RowContainer>
                
                <div/>
                <RowContainer>
                    <div/>
                    <Typography style={{
                        fontStyle:'italic'
                    }}>* All fields are mandatory</Typography>
                </RowContainer>
                <CustomButton onClick={handleCreateBatteryPack}>Create Battery Pack +</CustomButton>
                <div/>
                
            </ColContainer>
        </Spin>
    </Modal>
  )
}

export default BatteryPackModal




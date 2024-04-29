import { Modal, Select, Spin, Input } from 'antd'
import React, {useState} from 'react'
import styled from 'styled-components';
import CustomButton from './Button';
import { masterBms, slaveBms } from '../utils/consts';
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
const AddBmsIcsModal = (props) => {
const [formData, setFormData] = useState({});
const [isLoading, setIsLoading] = useState(false);
const handleFinishCreatingBatteryPack = () => {
    if(formData['masterBms']!=undefined && formData['masterBms']!=null &&
    formData['slaveBms']!=undefined && formData['slaveBms'].length>0
    ){
        const master = masterBms.find((item)=>item.bmsName === formData.masterBms);
        const slave = [];
        formData.slaveBms.forEach((item)=>{
            slave.push(slaveBms.find((slb)=>slb.bmsName === item));
        })
        const data = {master,slave,batteryPackUniqueId: props.batteryPack.batteryPackUniqueId};
        store.dispatch(dataAction.setFinalisedBatteryPacks(data));
        props.handleCloseAddBmsIcsModal();
        console.log(data);
    }
}

const checkKeys = (type) => {
    if(formData[type]!==null && formData[type]!==undefined) return true;
    return false;
}
const filterOption = (input, option) =>
(option?.label ?? '').toLowerCase().includes(input.toLowerCase());
  
return (
    <Modal width={600} title="Add Bms Ics" footer={null} open={props.isOpenAddBmsIcsModal} onCancel={props.handleCloseAddBmsIcsModal}>
        <Spin spinning={isLoading}>
            <ColContainer style={{ alignItems:'center' }}>
                <div/>
                <Select
                    value={formData.masterBms??null}
                    placeholder="master bms"
                    allowClear
                    style={{width:'100%'}}
                    onChange={(value)=>{
                        setFormData(values => ({...values, ["masterBms"]: value}));
                    }}
                    filterOption={filterOption}
                    showSearch
                    optionFilterProp="children"
                    options={masterBms.map((item,index)=>{
                        return {
                            value: item.bmsName,
                            label: item.bmsName
                        }
                    })}
                    />
                    <Select
                    value={formData.slaveBms??null}
                    placeholder="slave bms"
                    allowClear
                    mode="multiple"
                    style={{width:'100%'}}
                    onChange={(value)=>{
                        setFormData(values => ({...values, ["slaveBms"]: value}));
                    }}
                    filterOption={filterOption}
                    showSearch
                    optionFilterProp="children"
                    options={slaveBms.map((item,index)=>{
                        return {
                            value: item.bmsName,
                            label: item.bmsName
                        }
                    })}
                    />
                <RowContainer>
                    <div/>
                    <Typography style={{
                        fontStyle:'italic'
                    }}>* All fields are mandatory</Typography>
                </RowContainer>
                <CustomButton onClick={handleFinishCreatingBatteryPack}>Create Battery Pack +</CustomButton>
                <div/>
                
            </ColContainer>
        </Spin>
    </Modal>
  )
}

export default AddBmsIcsModal




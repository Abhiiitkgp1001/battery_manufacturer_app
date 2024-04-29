import { Card, Col, Input, Row, Typography } from 'antd';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import BatteryPackModal from '../components/BatteryPackModal';
import CustomButton from '../components/Button';
import { useNavigate } from 'react-router-dom';
import store from '../store';
import AddBmsIcsModal from '../components/AddBmsIcsModal';
const Container = styled.div`
display: flex;
flex-direction: row;
box-sizing: border-box;
padding: 12px 20px;
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
const Gridontainer = styled.div`
display: grid;
grid-template-columns: auto auto auto;
grid-gap: 12px;
box-sizing: border-box;
align-items: center;
justify-content: space-between;
width: 100%;
`;
const ColContainer = styled.div`
display: flex;
flex-direction: column;
gap:12px;
box-sizing: border-box;
justify-content: flex-start;
width: 100%;
`;

const CardTextContainer = styled.div`
display: flex;
flex: 1;
flex-direction: column;
gap:2px;
box-sizing: border-box;
justify-content: flex-start;
`;

const CardTextTitle = styled.div`
font-size: 12px;
font-weight: 500;
color: #B4B4B3;
`;

const CardTextContent = styled.div`
font-size: 16px;
font-weight: 600;
`;
const { Search } = Input;

const BatteryScreen = () => {
    const batteryPacks = useSelector((state)=>state.batteryPacks);
    const navigate = useNavigate();
    const [isOpenBatteryPackModal, setIsOpenBatteryPackModal] = useState(false);
    const [isOpenAddBmsIcsModal, setIsOpenAddBmsIcsModal] = useState(false);
    const [currentBatteryPack, setCurrentBatteryPack] = useState({});

    const handleOpenBatteryPackModal = () => setIsOpenBatteryPackModal(true);
    const handleCloseBatteryPackModal = () => setIsOpenBatteryPackModal(false);
    const handleOpenAddBmsIcsModal = (item) => {
        setCurrentBatteryPack(item);
        setIsOpenAddBmsIcsModal(true);
    };
    const handleCloseAddBmsIcsModal = () => setIsOpenAddBmsIcsModal(false);
    const navigateToAvailableBatteryPacks = () => navigate('/readyBatteryPacks');

    return (
    <Container>
        <AddBmsIcsModal batteryPack={currentBatteryPack} isOpenAddBmsIcsModal={isOpenAddBmsIcsModal} handleCloseAddBmsIcsModal={handleCloseAddBmsIcsModal}/>
        <BatteryPackModal isOpenBatteryPackModal={isOpenBatteryPackModal} handleCloseBatteryPackModal={handleCloseBatteryPackModal}/>
        <ColContainer>
            <Row style={{
                flexDirection:'row-reverse',
                gap: 20
            }}>
                <CustomButton onClick={handleOpenBatteryPackModal}>Add Battery Pack +</CustomButton>
                <CustomButton onClick={navigateToAvailableBatteryPacks}>See Available Battery Packs {"-->"}</CustomButton>
            </Row>
            <Row style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                margin: '24px 0px',
            }}>
                <Typography style={{
                    fontSize: 24,
                    fontWeight: 600,
                    flex:1,
                }}>Battery Packs</Typography>
                <Search placeholder="search battery pack"  style={{
                    flex:1,
                }}/>
            </Row>
            <Row gutter={[12,20]}>
            {
                batteryPacks.map((item,index)=>(
                    <Col xs={24} sm={12} md={8} xl={6}>
                        <Card style={{ height: '100%' }} title={item.batteryPackUniqueId}>
                        <Col style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap:12
                        }}>
                            <Row style={{
                                display: 'flex',
                                flexDirection: 'row',
                                gap:6
                            }}>
                                <CardTextContainer>
                                    <CardTextTitle>Manufacturer</CardTextTitle>
                                    <CardTextContent>{item.manufacturer}</CardTextContent>
                                </CardTextContainer>
                                <CardTextContainer>
                                    <CardTextTitle>Capacity</CardTextTitle>
                                    <CardTextContent>{item.capacity} mAh</CardTextContent>
                                </CardTextContainer>
                            </Row>
                            <Row style={{
                                display: 'flex',
                                flexDirection: 'row',
                                gap:6
                            }}>
                                <CardTextContainer>
                                    <CardTextTitle>Cell Chemistry</CardTextTitle>
                                    <CardTextContent>{item.cellChemistry}</CardTextContent>
                                </CardTextContainer>
                                <CardTextContainer>
                                    <CardTextTitle>Power</CardTextTitle>
                                    <CardTextContent>{item.power} kWh</CardTextContent>
                                </CardTextContainer>
                            </Row>
                            <Row style={{
                                display: 'flex',
                                flexDirection: 'row',
                                gap:6
                            }}>
                                <CardTextContainer>
                                    <CardTextTitle>Max Voltage</CardTextTitle>
                                    <CardTextContent>{item.maxVoltage} V</CardTextContent>
                                </CardTextContainer>
                                <CardTextContainer>
                                    <CardTextTitle>Min Voltage</CardTextTitle>
                                    <CardTextContent>{item.minVoltage} V</CardTextContent>
                                </CardTextContainer>
                            </Row>
                            <Row style={{
                                display: 'flex',
                                flexDirection: 'row',
                                gap:6
                            }}>
                                <CardTextContainer>
                                    <CardTextTitle>Rated Current</CardTextTitle>
                                    <CardTextContent>{item.ratedCurrent} mAh</CardTextContent>
                                </CardTextContainer>
                                <CardTextContainer>
                                    <CardTextTitle>Max Temperature</CardTextTitle>
                                    <CardTextContent>{item.maxTemperature} ° C</CardTextContent>
                                </CardTextContainer>
                            </Row>
                            <CustomButton onClick={()=>handleOpenAddBmsIcsModal(item)}>Add BMS ICs</CustomButton>
                        </Col>
                    </Card>
                    </Col>
                ))
            }
            </Row>
        </ColContainer>
    </Container>
  )
}

export default BatteryScreen
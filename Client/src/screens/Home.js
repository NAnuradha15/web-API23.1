import { Grid2, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ServiceCard from '../components/ServiceCard';
import axios from 'axios'; // Fixed typo from 'axois' to 'axios'

function Home() {
    const [trains, updateTrains] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios.get("http://localhost:8000/train").then((res) => {
            console.log(res.data.data);
            updateTrains(res.data.data);
        });
    }, []);

    return (
        <div>
            <Grid2 container>
                <Grid2>
                    <div style={{ position: 'relative' }}>
                        <img src={require('../assets/trainWall2.webp')} alt='back' width={'100%'} height={'100%'} style={{ filter: 'blur(3px)' }} />
                    </div>

                    <div
                        style={{
                            position: 'absolute',
                            top: '1%',
                            left: '1%',
                            fontSize: '4rem',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            color: 'white'
                        }}
                    >
                        Train Tracking System
                        <div style={{ fontSize: 16, textAlign: 'left', marginLeft: 10, fontWeight: 400 }}>
                            Check Your Train Status
                        </div>
                    </div>
                    <div>
                        <div
                            style={{
                                position: 'absolute',
                                top: '60%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                fontWeight: 'bold',
                                textAlign: 'center',
                                backgroundColor: 'white',
                                width: '50%',
                                padding: 20,
                                opacity: 0.8,
                                borderRadius: 18,
                                maxHeight: 500
                            }}
                        >
                            <div style={{ display: 'flex', backgroundColor: 'gray', alignItems: 'center', borderRadius: 18, padding: 10, justifyContent: 'space-between', color: 'white' }}>
                                <TextField
                                    hiddenLabel
                                    id="filled-hidden-label-small"
                                    variant="filled"
                                    size="small"
                                    fullWidth
                                    style={{ opacity: 1, color: 'white' }}
                                    onChange={(e) => { setSearch(e.target.value); }}
                                />
                                <div>
                                    <img src={require('../assets/Search.png')} alt='search' width={30} />
                                </div>
                            </div>

                            <div style={{ display: 'block', marginTop: 10, padding: 10 }}>
                                <div style={{ textAlign: 'left', fontSize: 20 }}>
                                    Trains
                                </div>
                                <div
                                    style={{
                                        display: 'block',
                                        justifyContent: 'space-between',
                                        marginTop: 10,
                                        padding: 10,
                                        backgroundColor: 'gray',
                                        borderRadius: 18,
                                        maxHeight: 300,
                                        overflowY: 'auto' // Added scroll for overflow
                                    }}
                                >
                                    {trains.filter((element) => {
                                        if (search === "") {
                                            return true;
                                        } else if (element.name.toLowerCase().includes(search.toLowerCase())) {
                                            return true;
                                        } else if (element.name.toLowerCase().includes(search.toLowerCase())) {
                                            return true;
                                        }
                                        return false;
                                    }).map((e, i) => (
                                        <>
                                        <ServiceCard key={i} data={e} />
                                        </>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid2>
            </Grid2>
        </div>
    );
}

export default Home;

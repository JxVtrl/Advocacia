import React, { useState } from 'react';
import { Button } from '../../components';
import { Box } from './styles';

export function Contact() {
    const [openChat, setOpenChat] = useState(false);
    return (
        <div>
            {openChat ? (
                <Box>
                    <Button
                        text="x"
                        action={setOpenChat}
                        actionVar={openChat}
                        styles={{
                            position: 'absolute',
                            top: '5px',
                            right: '5px',
                            width: '30px',
                            height: '30px',
                            fontSize: '20px',
                            cursor: 'pointer',
                        }}
                    />
                </Box>
            ) : (
                <Button
                    action={setOpenChat}
                    actionVar={openChat}
                    styles={{
                        width: '200px',
                        position: 'fixed',
                        borderRadius: '100px',
                        boxShadow: '2px 2px 5px #000',
                        backgroundColor: '#555',
                        opacity: '1',
                        cursor: 'pointer',
                        right: '0',
                        bottom: '0',
                        margin: '20px',
                        padding: '4px 5px',
                        color: '#fff',
                        fontSize: '14px',
                        fontWeight: '600',
                        zIndex: '5'
                    }}
                    text="Vamos conversar por chat!"
                />    
            )}
        </div>
    );
}

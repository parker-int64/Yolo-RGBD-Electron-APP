// settings page

import React from 'react';
import "./css/settings-page.css"
import InputLabel from '@material-ui/core/InputLabel';
import Switch from '@material-ui/core/Switch';
import NativeSelect from '@material-ui/core/NativeSelect';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';

export default class SettingsPage extends React.Component {
    render(){
        return(
            <div className="settingsContent">
                <Appearance />
            </div>
        );
    }
}


class Appearance extends React.Component {
    render(){
        const style = {
            marginTop: '20px',
            marginBottom: '20px',
            width: '100%',
            maxWidth: 640,
            height: '90%',
            bgcolor: 'background.paper',
            animation: "fadeIn",
            animationDuration: "1s",
          };

        return(
            <List sx={style}>
                <ListItem alignItems='center'>
                    <span style={{fontSize:"24px", fontWeight: "800", textAlign: 'center',}}>Appearance</span>
                </ListItem>
                <ListItem>
                    <span style={{marginLeft: "20px"}}>Dark Mode</span>
                    <Switch></Switch>
                </ListItem>
                <ListItem>
                    <SelectLanguage />
                </ListItem>
                <Divider />

                
            </List>
        )
    }
}



function SelectLanguage() {
    return(
        <div>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                <span style={{marginLeft: "20px"}}>Language</span>
            <NativeSelect
                style={{marginLeft: "10px"}}
                defaultValue={10}
                inputProps={{
                    name: 'Language',
                    id: 'uncontrolled-native',
                }}
                >
                <option value={10}>English</option>
                <option value={20}>简体中文</option>
            </NativeSelect>
            </InputLabel>
        </div>
    );
}

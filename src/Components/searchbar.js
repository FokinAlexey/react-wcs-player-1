import { Component } from "react";
import React from "react";
import { Paper, TextField } from '@material-ui/core';

class SearchBar extends React.Component{
    state = {
        searchTerm : '',
    }
    handleChange = (event)=> this.setState({searchTeam:event.target.value})
    handleSubmit = (event) =>{
        const {searchTeam}= this.state;
     const   {onFormSubmit} = this.props
     onFormSubmit(searchTeam)
     event.preventDefault()
    }
    render(){
        const {handleSort} = this.props
        return(
        <div className="papper">
               <Paper elevation = {6} style = {{padding:'10px'}}>

               <TextField fullWidth label = "Search..." onChange={(e)=>handleSort(e.target.value)} >

               </TextField>

       </Paper>
        </div>

        )

    }
}
export default SearchBar
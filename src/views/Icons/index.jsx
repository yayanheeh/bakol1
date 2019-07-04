import React, { Component } from 'react';

// Externals
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Shared layouts
import { Dashboard as DashboardLayout } from 'layouts';

// Component styles
const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4
  },
  iframe: {
    width: '100%',
    minHeight: '640px',
    border: 0
  }
});

class Icons extends Component {
  render() {
    const { classes } = this.props;

    return (
      <DashboardLayout title="Icons">
        <div className={classes.root}>
         Tessss
 <div id="app">
    <div class = row>
        <component-m 
            title = 'Card 1'
             message = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
            icon = 'far fa-address-card fa-2x'>
        </component-m>
        
        <component-m
             title = 'Card 2'
             message = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
            icon = 'far fa-bell fa-2x'>
        </component-m>
        
        <component-m             
             title = 'Card 3'
             message = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
            icon = 'far fa-calendar-alt fa-2x'>
        </component-m>
    </div>
</div>

<script type="text/x-template" id="component-m">
    <div class= 'card'>
        <div class = 'card-header'>
            <h1 class = 'card-header-title'>{{title}}</h1>
            <i v-bind:class = 'icon'></i>
        </div>
        <div class = 'card-content'>
            <p class = 'card-content-text'>{{message}}</p>  
        </div>
        <div class = 'card-footer'>
            <i @mouseover = 'animateRight'
               @mouseleave = 'animateLeft'
               v-on:click = 'click'
               class="fas fa-arrow-right fa-2x"
             ></i>
        </div>
    </div>
</script>
<style>
div.card{
    font-family: 'Open Sans', sans-serif;
    width:330px;
    height:270px;
    
    margin-left:20px;
    margin-right:20px;
    
    display:flex;
    flex-direction:column;
    
    &.blowUp{
        animation:blowUp .5s;
        animation-fill-mode: forwards;
    }
    &.collapse{
        animation:collapse .5s;
        //animation-fill-mode: forwards;
    }
    
    @keyframes blowUp{
        from{
            width:330px;
            height:270px;
        }
        to{
            width:400px;
            height:340px;
        }
    }
    @keyframes collapse{
        from{
            width:400px;
            height:340px;
        }
        to{
            width:330px;
            height:270px;
        }
    }
    
    div.card-header{
        display:flex;
        width:100%;
        height:65px;
        max-height:65px;
        align-items:center;
        justify-content:space-between;
        flex: 1 0 auto;
        
        i{
            color:white;
            padding-right:25px;
            
            
            
        }
        
        h1.card-header-title{
            padding-left:25px;
            margin:0;
            color:white;
            line-height:65px;
            font-weight:400;
        }
    }
    div.card-content{
        padding:25px;
        flex: 1 0 auto;
        p.card-content-text{
            margin:0;
            color:white;
            letter-spacing:1px;
        }
    }
    div.card-footer{
        height:40px;
        display:flex;
        justify-content:flex-end;
            
        flex-shrink: 0;
        
        i{
            color:white;
            position:relative;
            right:20px;
            
            &.moveRight{
                animation-name:moveRight;
                animation-duration:.2s;
                animation-fill-mode: forwards;
                animation-timing-function:ease-in;
            }
            
            @keyframes moveRight{
                from{right:20px;}
                to{right:15px;}
            }
            
            &.moveLeft{
                animation-name:moveLeft;
                animation-duration:.4s;
                animation-fill-mode: forwards;
                animation-timing-function:ease-out;
            }
            
             @keyframes moveLeft{
                from{right:15px;}
                to{right:20px;}
             }
        }
    }
}
div.card:nth-child(1){
    background-color:#3498db;
    
    div.card-header{
        background-color:#2980b9;
    }
}
div.card:nth-child(2){
    background-color:#34495e;
    
    div.card-header{
        background-color:#2c3e50;
    }
}
div.card:nth-child(3){
    background-color:#9b59b6;
    
    div.card-header{
        background-color:#8e44ad;
    }
}
div.row{
    display:flex;
    justify-content:center;
    margin-top:100px;
}


</style>
Tes

        </div>
      </DashboardLayout>
    );
  }
}

Icons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Icons);

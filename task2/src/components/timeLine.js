import React from 'react'

class TimeLine extends React.Component {

    render() {
        const grid = {
            display: 'grid',
            gridTemplateColumns: ' repeat(16,  6.25%) ', 
        };
        const griditem = {
            backgroundColor: 'rgba(255, 255, 255)',
            fontSize: '15px',
            textAlign: 'center',
            marginTop: '12px'
        }
        return (
            <div style={grid}>
                <div style={griditem}>8:00</div>
                <div style={griditem}>9</div>
                <div style={griditem}>10</div>
                <div style={griditem}>11</div>
                <div style={griditem}>12</div>
                <div style={griditem}>13</div>
                <div style={griditem}>14</div>
                <div style={griditem}>15</div>
                <div style={griditem}>16</div>
                <div style={griditem}>17</div>
                <div style={griditem}>18</div>
                <div style={griditem}>19</div>
                <div style={griditem}>20</div>
                <div style={griditem}>21</div>
                <div style={griditem}>22</div>
                <div style={griditem}>23</div>
            </div>
        );
    }
}
export default TimeLine
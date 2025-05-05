import { useCallback } from 'react';
import { Handle, Position } from '@xyflow/react';
import { FaPlus } from 'react-icons/fa6';
import '../styles/LeadCrmNode.css'
 
const handleStyle = { left: 10 };
 
function LeadCrmNode({ data, isConnectable }) { 
  return (
    <button className="nodrag lead-node"
    onMouseDown={(e) => e.stopPropagation()} onClick={() => {
        console.log("Clicked")
    }} >
      <div className='content' >
        <div className='plus' >
        <FaPlus />
        </div>
        <label htmlFor="text">Add Lead Source</label>
        <p>Click to add leads from List or CRM</p>
      </div>
    </button>
  );
}
 
export default LeadCrmNode;
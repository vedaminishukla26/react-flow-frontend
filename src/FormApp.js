import { FaPencilAlt } from 'react-icons/fa';
import './styles/FormApp.css';
import { FaAngleDown, FaArrowDown, FaArrowDownShortWide, FaPencil, FaRegPenToSquare, FaRocket } from 'react-icons/fa6';
import { ReactFlow, MiniMap, Controls, Background, useNodesState, useEdgesState, addEdge } from '@xyflow/react'
import '@xyflow/react/dist/style.css';

import { defaultEdges } from './edges';
import { defaultNodes } from './nodes';
import { useCallback } from 'react';
import LeadCrmNode from './components/LeadCrmNode';

const FormApp = () => {

    const [nodes, setNodes, onNodesChange] = useNodesState(defaultNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(defaultEdges);

    const nodeTypes = { leadNode: LeadCrmNode };
 
    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  return (
    <div className="screen">
      <header className="header">
        <div className="header-left">
          <h1 className="title">
            delete
            <span className="pencil">
              <FaPencil />
            </span>
          </h1>
          <p className="subtitle">
            Click on a block to configure and add it in sequence
          </p>
        </div>
        <button className="save-button">
          <span className='rocket'>
            <FaRocket />
          </span>
          Save & Schedule | 
          <span className='down-arrow' >
          <FaAngleDown />
          </span>
        </button>
      </header>
      <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
    >
      <MiniMap />
      <Controls />
      <Background />
    </ReactFlow>
    </div>
  );
};

export default FormApp;

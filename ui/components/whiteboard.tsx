'use client';

import { useEffect, useRef, useState } from 'react';
import type { Canvas as FabricCanvas } from 'fabric';

type Tool = 'draw' | 'select' | 'text' | 'erase' | 'pan';
const DEFAULT_COLOR = '#08154b';

export function Whiteboard() {
  const elementRef = useRef<HTMLCanvasElement>(null);
  const canvasRef = useRef<FabricCanvas | null>(null);
  const [tool, setTool] = useState<Tool>('draw');
  const [color, setColor] = useState(DEFAULT_COLOR);

  useEffect(() => {
    let active = true;
    void import('fabric').then(({ Canvas, PencilBrush, IText }) => {
      if (!active || !elementRef.current) return;
      const canvas = new Canvas(elementRef.current, {
        width: elementRef.current.parentElement?.clientWidth ?? 800,
        height: elementRef.current.parentElement?.clientHeight ?? 430,
        backgroundColor: '#fffefe',
        isDrawingMode: true,
        selection: true,
      });
      canvas.freeDrawingBrush = new PencilBrush(canvas);
      canvas.freeDrawingBrush.color = DEFAULT_COLOR;
      canvas.freeDrawingBrush.width = 3;
      const title = new IText('Teach your idea here…', { left: 190, top: 70, fill: '#172253', fontSize: 30, fontFamily: 'system-ui' });
      canvas.add(title);
      canvasRef.current = canvas;
    });
    return () => { active = false; canvasRef.current?.dispose(); canvasRef.current = null; };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.isDrawingMode = tool === 'draw' || tool === 'erase';
    canvas.selection = tool === 'select';
    if (canvas.freeDrawingBrush) {
      canvas.freeDrawingBrush.color = tool === 'erase' ? '#fffefe' : color;
      canvas.freeDrawingBrush.width = tool === 'erase' ? 18 : 3;
    }
  }, [tool, color]);

  const addText = async () => {
    const { IText } = await import('fabric');
    const canvas = canvasRef.current;
    if (!canvas) return;
    const text = new IText('Type here', { left: 80, top: 130, fill: color, fontSize: 24 });
    canvas.add(text); canvas.setActiveObject(text); text.enterEditing(); canvas.requestRenderAll();
    setTool('select');
  };

  const clear = () => {
    if (!window.confirm('Clear all content from the board? You can undo this action in the full editor history.')) return;
    canvasRef.current?.getObjects().forEach((object) => canvasRef.current?.remove(object));
    canvasRef.current?.requestRenderAll();
  };

  return (
    <section className="board-wrap" aria-label="Interactive whiteboard">
      <div className="board-tools" role="toolbar" aria-label="Whiteboard tools">
        <button className={tool === 'draw' ? 'tool active' : 'tool'} onClick={() => setTool('draw')} aria-label="Pen">✎</button>
        <button className={tool === 'select' ? 'tool active' : 'tool'} onClick={() => setTool('select')} aria-label="Select">↖</button>
        <button className="tool" onClick={addText} aria-label="Add text">T</button>
        <button className={tool === 'erase' ? 'tool active' : 'tool'} onClick={() => setTool('erase')} aria-label="Eraser">⌫</button>
        <button className={tool === 'pan' ? 'tool active' : 'tool'} onClick={() => setTool('pan')} aria-label="Pan classroom">✥</button>
        <span className="tool-separator" />
        {['#08154b', '#1998ed', '#f12636', '#40bf78'].map((value) => <button key={value} className="color" style={{ background: value }} onClick={() => setColor(value)} aria-label={`Use ${value}`} />)}
        <button className="clear-button" onClick={clear}>⌫ Clear Board</button>
      </div>
      <div className="canvas-holder"><canvas ref={elementRef} /></div>
      <div className="zoom-controls" aria-label="Classroom zoom"><button>−</button><span>100%</span><button>+</button></div>
    </section>
  );
}

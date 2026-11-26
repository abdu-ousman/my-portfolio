import React, { useLayoutEffect, useRef, useState } from 'react';

// Fit an intact existing section into one viewport without introducing scrollbars.
// ResizeObserver keeps the panel fitted on browser resizing and content changes.
export function FitView({children,compact=false,noScale=false}) {
  const frame=useRef(null);
  const content=useRef(null);
  const [scale,setScale]=useState(1);
  useLayoutEffect(()=>{
    const frameEl=frame.current,contentEl=content.current;
    if(!frameEl||!contentEl) return;
    let raf;
    function measure(){
      cancelAnimationFrame(raf);
      raf=requestAnimationFrame(()=>{
        if(!frameEl||!contentEl) return;
        const width=frameEl.clientWidth, height=frameEl.clientHeight;
        // layout width is set on the content at the viewport's natural width
        const w=contentEl.scrollWidth, h=contentEl.scrollHeight;
        // Never shrink below a readable size; the frame scrolls instead.
        const floor=height<520?1:0.8;
        const next=noScale?1:Math.max(floor,Math.min(1,width/Math.max(w,1),height/Math.max(h,1)));
        setScale(prev=>Math.abs(prev-next)>.005?next:prev);
      });
    }
    const observer=new ResizeObserver(measure);
    observer.observe(frameEl);observer.observe(contentEl);
    measure();
    return ()=>{cancelAnimationFrame(raf);observer.disconnect();};
  },[children,noScale]);
  return <div ref={frame} className={`viewport-fit-frame ${compact?'viewport-fit-frame--hero':''}`}>
    <div className="viewport-fit-content" ref={content} style={{transform:`scale(${scale})`,transformOrigin:'top center'}}>{children}</div>
  </div>;
}

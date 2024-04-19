function shoot(targetId) {
    const shooter = document.getElementById('shooter');
    const target = document.getElementById(targetId);
    
    const shooterRect = shooter.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    
    const dx = targetRect.left - shooterRect.left + (targetRect.width / 2);
    const dy = targetRect.top - shooterRect.top + (targetRect.height / 2);
    
    const angle = Math.atan2(dy, dx);
    
    shooter.style.transform = `translate(${dx}px, ${dy}px) rotate(${angle}rad)`;
  }
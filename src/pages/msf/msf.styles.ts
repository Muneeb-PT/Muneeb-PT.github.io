export const msfStyles = `
/* Heading font-family is restated explicitly here: the original
   stylesheet only set it on body and let h1–h3 inherit it, which
   loses to the main app's own (more specific-by-source-order)
   heading rule once both are in the document at once. */
h1, h2, h3, h4, h5, h6 {
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

:root{
  --green:#08783f;
  --green-dark:#034d29;
  --green-deep:#022d1a;
  --lime:#a7d129;
  --gold:#d7b35a;
  --cream:#f7f5ed;
  --paper:#fffdf8;
  --ink:#10251b;
  --muted:#65736b;
  --line:rgba(8,120,63,.14);
  --shadow:0 24px 70px rgba(3,45,26,.13);
  --radius:24px;
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{
  font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
  color:var(--ink);background:var(--cream);line-height:1.6;
}
a{color:inherit;text-decoration:none}
.nav{
  position:fixed;top:16px;left:50%;transform:translateX(-50%);
  width:min(1120px,calc(100% - 28px));z-index:20;
  display:flex;align-items:center;justify-content:space-between;
  padding:12px 14px 12px 18px;border:1px solid rgba(255,255,255,.55);
  background:rgba(255,255,255,.78);backdrop-filter:blur(18px);
  border-radius:999px;box-shadow:0 14px 45px rgba(0,0,0,.08);
}
.brand{display:flex;align-items:center;gap:10px;font-weight:900;letter-spacing:-.03em}
.mark{
  width:38px;height:38px;border-radius:50%;display:grid;place-items:center;
  color:white;background:linear-gradient(145deg,var(--green),var(--green-dark));
  font-size:13px;font-weight:950;box-shadow:0 7px 20px rgba(8,120,63,.3);
}
.navlinks{display:flex;gap:5px}
.navlinks a{padding:9px 13px;border-radius:999px;font-size:13px;font-weight:700;color:#355047}
.navlinks a:hover{background:#eaf5ee;color:var(--green-dark)}
.hero{
  min-height:760px;position:relative;overflow:hidden;color:white;
  background:
    radial-gradient(circle at 82% 18%,rgba(167,209,41,.28),transparent 24%),
    radial-gradient(circle at 10% 75%,rgba(215,179,90,.14),transparent 25%),
    linear-gradient(135deg,var(--green-deep),#075f36 55%,#08783f);
}
.hero:before{
  content:"";position:absolute;inset:0;opacity:.13;
  background-image:linear-gradient(rgba(255,255,255,.25) 1px,transparent 1px),
                   linear-gradient(90deg,rgba(255,255,255,.25) 1px,transparent 1px);
  background-size:56px 56px;
  mask-image:linear-gradient(to bottom,black,transparent 82%);
}
.hero:after{
  content:"";position:absolute;width:520px;height:520px;border:1px solid rgba(255,255,255,.13);
  border-radius:50%;right:-180px;bottom:-220px;box-shadow:0 0 0 55px rgba(255,255,255,.025),0 0 0 110px rgba(255,255,255,.018);
}
.hero-inner{width:min(1120px,calc(100% - 36px));margin:auto;padding:170px 0 100px;position:relative;z-index:2}
.kicker{display:inline-flex;align-items:center;gap:8px;padding:7px 12px;border:1px solid rgba(255,255,255,.22);border-radius:999px;background:rgba(255,255,255,.08);font-size:12px;font-weight:800;letter-spacing:.08em;text-transform:uppercase}
.dot{width:7px;height:7px;border-radius:50%;background:var(--lime);box-shadow:0 0 16px var(--lime)}
h1{font-size:clamp(48px,8vw,92px);line-height:.93;letter-spacing:-.065em;max-width:850px;margin:28px 0 26px}
.hero p{max-width:680px;color:rgba(255,255,255,.79);font-size:clamp(17px,2vw,21px)}
.hero-actions{display:flex;gap:12px;flex-wrap:wrap;margin-top:34px}
.btn{padding:13px 18px;border-radius:999px;font-weight:850;font-size:14px;transition:.25s}
.btn-primary{background:white;color:var(--green-dark)}
.btn-secondary{border:1px solid rgba(255,255,255,.25);background:rgba(255,255,255,.07)}
.btn:hover{transform:translateY(-2px)}
.stats{
  display:grid;grid-template-columns:repeat(4,1fr);gap:1px;margin-top:72px;
  border:1px solid rgba(255,255,255,.14);border-radius:20px;overflow:hidden;background:rgba(255,255,255,.12);
}
.stat{padding:22px;background:rgba(0,0,0,.08);backdrop-filter:blur(8px)}
.stat b{display:block;font-size:29px;letter-spacing:-.04em}.stat span{font-size:12px;color:rgba(255,255,255,.65)}
.section{padding:100px 0}
.container{width:min(1120px,calc(100% - 36px));margin:auto}
.section-head{display:flex;justify-content:space-between;gap:30px;align-items:end;margin-bottom:42px}
.eyebrow{font-size:12px;font-weight:900;letter-spacing:.13em;text-transform:uppercase;color:var(--green)}
h2{font-size:clamp(34px,5vw,58px);line-height:1;letter-spacing:-.055em;margin-top:10px}
.section-intro{max-width:500px;color:var(--muted)}
.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
.card{
  background:var(--paper);border:1px solid var(--line);border-radius:var(--radius);
  padding:27px;box-shadow:0 12px 35px rgba(3,45,26,.055);transition:.3s;
}
.card:hover{transform:translateY(-5px);box-shadow:var(--shadow)}
.icon{width:45px;height:45px;border-radius:15px;display:grid;place-items:center;background:#e9f5ed;color:var(--green);font-size:20px;margin-bottom:22px}
.card h3{font-size:20px;letter-spacing:-.025em;margin-bottom:9px}.card p{color:var(--muted);font-size:14px}
.timeline{position:relative;display:grid;gap:18px}
.timeline:before{content:"";position:absolute;left:19px;top:20px;bottom:20px;width:1px;background:#cfe3d5}
.t-item{display:grid;grid-template-columns:40px 1fr;gap:20px;position:relative}
.t-dot{width:40px;height:40px;border-radius:50%;background:white;border:5px solid #e1f1e6;box-shadow:0 0 0 1px #acd1b9}
.t-content{background:white;border:1px solid var(--line);border-radius:20px;padding:22px 25px}
.t-content strong{display:block;font-size:18px}.t-content span{font-size:12px;color:var(--green);font-weight:800;text-transform:uppercase;letter-spacing:.08em}.t-content p{color:var(--muted);margin-top:7px;font-size:14px}
.impact{
  background:linear-gradient(135deg,#f1f7ed,#fffdf7);border:1px solid var(--line);
  border-radius:32px;padding:38px;display:grid;grid-template-columns:1.1fr .9fr;gap:35px;
}
.impact h3{font-size:31px;line-height:1.1;letter-spacing:-.04em}.impact p{color:var(--muted);margin-top:14px}
.pills{display:flex;flex-wrap:wrap;gap:9px;align-content:start}
.pill{padding:10px 13px;background:white;border:1px solid var(--line);border-radius:999px;font-size:12px;font-weight:800}
.quote{
  margin-top:20px;padding:30px;border-radius:24px;background:var(--green-dark);color:white;
  position:relative;overflow:hidden;
}
.quote:after{content:"“";position:absolute;right:22px;top:-22px;font:150px Georgia;color:rgba(255,255,255,.07)}
.quote p{font-size:22px;line-height:1.35;max-width:760px;position:relative;z-index:1}
footer{padding:45px 0;background:#032d1a;color:rgba(255,255,255,.65)}
.footer-inner{display:flex;justify-content:space-between;gap:20px;align-items:center}
footer strong{color:white}
@media(max-width:800px){
  .navlinks{display:none}.hero{min-height:auto}.hero-inner{padding-top:145px}
  .stats{grid-template-columns:repeat(2,1fr)}.grid{grid-template-columns:1fr}
  .section{padding:72px 0}.section-head{display:block}
  .section-intro{margin-top:15px}.impact{grid-template-columns:1fr;padding:27px}
}
@media(max-width:480px){
  h1{font-size:53px}.hero-inner{width:min(100% - 28px,1120px)}
  .container{width:min(100% - 28px,1120px)}.stats{margin-top:50px}
  .stat{padding:17px}.stat b{font-size:23px}
}
`;

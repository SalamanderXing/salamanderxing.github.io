import About from "./About";
import { createRef, useEffect, useState } from "react";
import initBoids from "./flocking/main";

function BasicExample() {
  const [expanded, setExpanded] = useState(false);
  // const routes = {
  //   "Giulio Zani": <About />,
  //   "Projects": <Projects />,
  //   "Contact": <Contact />,
  // } as Record<string, JSX.Element>;
  // const [currentRoute, setCurrentRoute] = useState<string>("Giulio Zani");
  // // defines a reference to the NavBar Toggle button
  // const navBarToggleRef = createRef<HTMLButtonElement>();
  // const unsetExpanded = (
  //   e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  // ) => {
  //   e.preventDefault();
  //   const route = e.currentTarget.innerText;
  //   setCurrentRoute(route);
  //   if (expanded) {
  //     navBarToggleRef.current?.click();
  //   }
  // };
  //let particlesManager: ParticlesManager | null = null;
  let alreadyInitialized = false;
  useEffect(() => {
    const div = document.getElementById(
      "particle-canvas",
    )! as HTMLDivElement;
    if (!alreadyInitialized) {
      initBoids(div);
      alreadyInitialized = true;
    }
    // const updateParticleCanvasPositionBasedOnScroll = () => {
    //   const scrollTop = window.pageYOffset;
    //   div.style.top = `${scrollTop}px`;
    //   requestAnimationFrame(updateParticleCanvasPositionBasedOnScroll);
    // };
    // window.requestAnimationFrame(
    //   updateParticleCanvasPositionBasedOnScroll,
    // );
  }, []);
  return (
    <>
      <div style={{ position: "fixed", zIndex:'-100', width:'100vw', height:'100vh' }} id="particle-canvas">
      </div>
      {
        /*
      <Navbar
        bg="dark"
        expand="lg"
        style={{ color: "white" }}
        //className={`navbar-expand-${expanded ? "sm" : "lg"}`}
      >
        <Container
          style={{ maxWidth: "100vw", width: "100vw", color: "white" }}
        >
          <Navbar.Brand
            style={{ color: "white" }}
            onClick={unsetExpanded}
          >
            Giulio Zani
          </Navbar.Brand>
          <Navbar.Toggle
            style={{ marginRight: "0px", color: "white" }}
            ref={navBarToggleRef}
            aria-controls="basic-navbar-nav"
            className={`${!expanded ? "" : "collapse"}`}
            onClick={() => setExpanded(!expanded)}
          />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className={`${!expanded ? "" : "show"}`}
            style={{ color: "white" }}
          >
            <Nav className="me-auto">
              <Nav.Link
                style={{ color: "white" }}
                onClick={unsetExpanded}
              >
                Contact
              </Nav.Link>
              <Nav.Link
                style={{ color: "white" }}
                onClick={unsetExpanded}
              >
                Projects
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      */
      }
      {/*{routes[currentRoute]}*/}
      <About />
    </>
  );
}

export default BasicExample;

#include <windows.h>
#include <GL/glut.h>
#include <stdlib.h>

// Rotation angles for viewing
GLfloat xRotation = 15.0, yRotation = 15.0, zRotation = 0.0;

void drawTable() {
    // Table top
    glPushMatrix();
    glColor3f(0.7, 0.4, 0.0);
    glTranslatef(0.0, 0.0, 0.0);
    glScalef(12.0, 1.0, 8.0);  // Reduced from 15.0, 1.5, 10.0
    glutSolidCube(1.0);
    glPopMatrix();

    // Table legs - adjust positions for smaller table
    glColor3f(0.55, 0.27, 0.07);

    // Front left leg
    glPushMatrix();
    glTranslatef(-5.0, -5.0, -3.5);  // Adjusted from -6.0, -6.0, -4.0
    glScalef(0.8, 8.0, 0.8);         // Reduced from 1.0, 10.0, 1.0
    glutSolidCube(1.0);
    glPopMatrix();

    // Front right leg
    glPushMatrix();
    glTranslatef(5.0, -5.0, -3.5);   // Adjusted
    glScalef(0.8, 8.0, 0.8);         // Reduced
    glutSolidCube(1.0);
    glPopMatrix();
//..................................................................................
    // Back left leg
    glPushMatrix();
    glTranslatef(-5.0, -5.0, 3.5);   // Adjusted
    glScalef(0.8, 8.0, 0.8);         // Reduced
    glutSolidCube(1.0);
    glPopMatrix();

    // Back right leg
    glPushMatrix();
    glTranslatef(5.0, -5.0, 3.5);    // Adjusted
    glScalef(0.8, 8.0, 0.8);         // Reduced
    glutSolidCube(1.0);
    glPopMatrix();
}

void drawChair(float x, float z, float rotation) {
    glPushMatrix();
    glTranslatef(x, 0.0, z);
    glRotatef(rotation, 0.0, 1.0, 0.0);

    // Chair seat - reduced scale
    glPushMatrix();
    glColor3f(0.7, 0.4, 0.0);
    glTranslatef(0.0, -2.0, 0.0);
    glScalef(5.0, 0.8, 5.0);      // Reduced from 6.0, 1.0, 6.0
    glutSolidCube(1.0);
    glPopMatrix();

    // Chair legs - adjusted
    glColor3f(0.55, 0.27, 0.07);
//..................................................................................................................
    // Front left leg
    glPushMatrix();
    glTranslatef(-2.0, -6.0, -2.0);  // Adjusted from -2.5, -7.0, -2.5
    glScalef(0.6, 8.0, 0.6);         // Reduced from 0.8, 10.0, 0.8
    glutSolidCube(1.0);
    glPopMatrix();

    // Front right leg
    glPushMatrix();
    glTranslatef(2.0, -6.0, -2.0);   // Adjusted
    glScalef(0.6, 8.0, 0.6);         // Reduced
    glutSolidCube(1.0);
    glPopMatrix();

    // Back left leg
    glPushMatrix();
    glTranslatef(-2.0, -6.0, 2.0);   // Adjusted
    glScalef(0.6, 8.0, 0.6);         // Reduced
    glutSolidCube(1.0);
    glPopMatrix();

    // Back right leg
    glPushMatrix();
    glTranslatef(2.0, -6.0, 2.0);    // Adjusted
    glScalef(0.6, 8.0, 0.6);         // Reduced
    glutSolidCube(1.0);
    glPopMatrix();

    // Chair back - further reduced height
    glPushMatrix();
    glColor3f(0.6, 0.3, 0.0);
    glTranslatef(0.0, 1.5, 2.5);      // Adjusted position
    glScalef(5.0, 6.0, 0.6);          // Reduced from 6.0, 7.0, 0.8
    glutSolidCube(1.0);
    glPopMatrix();

    glPopMatrix();
}

void display() {
    glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
    glLoadIdentity();

    // Adjusted camera position to fit the scene better
    gluLookAt(1.0, 2.0, 14.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0);

    // Apply rotations for better initial view
    glRotatef(xRotation, 1.0, 0.0, 0.0);
    glRotatef(yRotation, 0.0, 1.0, 0.0);
    glRotatef(zRotation, 0.0, 0.0, 1.0);

    // Apply a global scale to make everything smaller
    glScalef(0.7, 0.7, 0.7);

    // Draw reference axes (smaller)
    //glBegin(GL_LINES);
    // X-axis (red)
    // glColor3f(1.0, 0.0, 0.0);
    //glVertex3f(-20.0, 0.0, 0.0);
    //glVertex3f(20.0, 0.0, 0.0);

    // Y-axis (green)
    //glColor3f(0.0, 1.0, 0.0);
    //glVertex3f(0.0, -20.0, 0.0);
    // glVertex3f(0.0, 20.0, 0.0);

    // Z-axis (blue)
    // glColor3f(0.0, 0.0, 1.0);
    // glVertex3f(0.0, 0.0, -20.0);
    //glVertex3f(0.0, 0.0, 20.0);
    //glEnd();

    // Draw table
    drawTable();

    // Draw two chairs with adjusted positions and rotations
    // Left chair facing 9 o'clock (270 degrees rotation)
// Draw two chairs with adjusted positions and rotations
// Left chair facing 9 o'clock (270 degrees rotation)
    drawChair(-10.0, 0.0, 270.0);  // Changed from -15.0 to -10.0

// Right chair facing 3 o'clock (90 degrees rotation)
    drawChair(11.7, 0.0, 90.0);    // Changed from 15.0 to 10.0

    glutSwapBuffers();
}

void keyboard(unsigned char key, int x, int y) {
    // Keyboard controls for rotating the scene
    switch (key) {
        case 'x':
            xRotation += 5.0;
            break;
        case 'X':
            xRotation -= 5.0;
            break;
        case 'y':
            yRotation += 5.0;
            break;
        case 'Y':
            yRotation -= 5.0;
            break;
        case 'z':
            zRotation += 5.0;
            break;
        case 'Z':
            zRotation -= 5.0;
            break;
        case 'r':  // Reset view
            xRotation = 15.0;
            yRotation = 15.0;
            zRotation = 0.0;
            break;
        case 27:   // ESC key
            exit(0);
            break;
    }
    glutPostRedisplay();
}

void reshape(int w, int h) {
    // Handle window resizing properly
    glViewport(0, 0, w, h);
    glMatrixMode(GL_PROJECTION);
    glLoadIdentity();

    // Adjust perspective to maintain proper aspect ratio
    float aspect = (float)w / (float)h;
    gluPerspective(60.0, aspect, 1.0, 100.0);  // Increased from 45.0 to 60.0

    glMatrixMode(GL_MODELVIEW);
}

void init() {
    // Set up projection for 3D perspective
    glMatrixMode(GL_PROJECTION);
    glLoadIdentity();
    gluPerspective(60.0, 1.0, 1.0, 100.0);  // Increased from 45.0 to 60.0
    glMatrixMode(GL_MODELVIEW);

    // Set background color
    glClearColor(0.1, 0.1, 0.1, 1.0);  // Dark gray background

    // Enable depth testing for 3D
    glEnable(GL_DEPTH_TEST);

    // Enable lighting for 3D effect
    glEnable(GL_LIGHTING);
    glEnable(GL_LIGHT0);

    // Set up light position and properties
    GLfloat light_position[] = { 10.0, 20.0, 15.0, 0.0 };
    GLfloat white_light[] = { 0.8, 0.8, 0.8, 1.0 };
    GLfloat ambient_light[] = { 0.3, 0.3, 0.3, 1.0 };

    glLightfv(GL_LIGHT0, GL_POSITION, light_position);
    glLightfv(GL_LIGHT0, GL_DIFFUSE, white_light);
    glLightfv(GL_LIGHT0, GL_AMBIENT, ambient_light);

    // Enable color material for easier coloring
    glEnable(GL_COLOR_MATERIAL);
    glColorMaterial(GL_FRONT, GL_AMBIENT_AND_DIFFUSE);
}

int main(int argc, char **argv) {
    glutInit(&argc, argv);
    glutInitWindowSize(800, 800);
    glutInitWindowPosition(100, 100);
    glutInitDisplayMode(GLUT_DOUBLE | GLUT_RGB | GLUT_DEPTH);
    glutCreateWindow("3D Table and Two Chairs in OpenGL");
    init();
    glutDisplayFunc(display);
    glutReshapeFunc(reshape);
    glutKeyboardFunc(keyboard);
    glutMainLoop();
    return 0;
}
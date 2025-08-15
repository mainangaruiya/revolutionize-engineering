import Project from '../models/projectModel.js';

// Innovator: Create project -> always pending
export const createProject = async (req, res) => {
  if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
  const { title, description, goals, stage } = req.body;
  if (!title) return res.status(400).json({ message: 'Title is required' });

  try {
    const project = new Project({
      title,
      description,
      goals,
      stage,
      creator: req.user.id,
      status: 'Pending'
    });
    await project.save();
    res.status(201).json({ message: 'Project submitted and awaiting approval', project });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Public: Get approved projects only
export const getApprovedProjects = async (req, res) => {
  try {
    const projects = await Project.find({ status: 'Approved' })
      .populate('creator', 'name email')
      .populate('collaborators', 'name email');
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Admin: Approve project
export const approveProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id).populate('creator');
    if (!project) return res.status(404).json({ message: 'Project not found' });
    if (project.status !== 'Pending') return res.status(400).json({ message: 'Project already reviewed' });

    project.status = 'Approved';
    project.approvedAt = new Date();
    project.editingLocked = true;
    await project.save();

    res.json({ message: 'Project approved', project, notify: `Notified ${project.creator.email}` });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Admin: Reject project
export const rejectProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id).populate('creator');
    if (!project) return res.status(404).json({ message: 'Project not found' });
    if (project.status !== 'Pending') return res.status(400).json({ message: 'Project already reviewed' });

    project.status = 'Rejected';
    project.rejectedAt = new Date();
    project.editingLocked = true;
    await project.save();

    res.json({ message: 'Project rejected', project, notify: `Notified ${project.creator.email}` });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Innovator: Update project if not locked
export const updateProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: 'Project not found' });
    if (project.editingLocked) return res.status(403).json({ message: 'Editing is locked for this project' });

    if (project.creator.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized' });
    }

    const { title, description, goals, stage } = req.body;
    if (title) project.title = title;
    if (description) project.description = description;
    if (goals) project.goals = goals;
    if (stage) project.stage = stage;

    await project.save();
    res.json({ message: 'Project updated', project });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Collaborator/Student: Join approved project
export const joinProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: 'Project not found' });
    if (project.status !== 'Approved') {
      return res.status(400).json({ message: 'Project not approved yet' });
    }
    if (!project.collaborators.includes(req.user.id)) {
      project.collaborators.push(req.user.id);
      await project.save();
    }
    res.json({ message: 'You have joined the project', project });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

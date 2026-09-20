import { Course } from "@/types/course";

export const courseData: Course = {
  id: "aim3002p",
  code: "AIM3002P",
  title: "Fundamentals of Generative Artificial Intelligence",
  description:
    "Explore generative AI tools, prompt engineering, generative models (VAEs, GANs, Diffusion), Large Language Models, fine-tuning, and deployment of GenAI applications.",
  longDescription:
    "This practical laboratory course provides hands-on experience with cutting-edge generative AI technologies. Students will explore generative AI tools including Hugging Face Transformers, learn prompt engineering techniques, implement generative models such as VAEs, GANs, and Diffusion models, apply fine-tuning with LoRA on Large Language Models, build chatbots with LangChain, and deploy generative AI applications using Gradio. The course emphasizes practical implementation and evaluation of generative AI systems.",
  prerequisites: [
    "Basics of Machine Learning",
    "Basics of Deep Learning",
    "Basics of Artificial Intelligence",
    "Python Programming (Intermediate level)",
  ],
  learningObjectives: [
    "Explore generative AI tools and generate content using pre-trained generative models",
    "Apply basic and advanced prompt engineering techniques for effective interaction with generative models",
    "Implement and analyze generative models including VAEs, GANs, and diffusion models",
    "Apply fine-tuning techniques and develop applications using Large Language Models",
    "Deploy and evaluate generative AI applications using appropriate tools, safety mechanisms, and evaluation metrics",
  ],

  // ─── MODULES (mapped from lab topics) ─────────────────────────

  modules: [
    {
      id: "module-1",
      number: 1,
      title: "Introduction to Generative AI",
      description:
        "Foundations of generative AI — AI/ML/DL hierarchy, discriminative vs. generative models, information theory, variational inference, and evaluation metrics.",
      overview:
        "This module covers the AI hierarchy (AI → ML → DL → GenAI), the fundamental difference between discriminative models (that classify) and generative models (that create), information theory essentials (entropy, mutual information), variational and amortized inference, evaluation metrics (Log-likelihood, FID, IS, PRD), neural networks, embeddings, and representation learning. Presented by Prof. Shraddha Jadhav.",
      topics: [
        { id: "t1-1", title: "AI, ML, DL and Generative AI Hierarchy" },
        { id: "t1-2", title: "Discriminative vs. Generative Models" },
        { id: "t1-3", title: "Information Theory — Entropy & Mutual Information" },
        { id: "t1-4", title: "Variational Inference & Amortized Inference" },
        { id: "t1-5", title: "Evaluating Generative Models (FID, IS, Log-likelihood)" },
        { id: "t1-6", title: "Neural Networks, Embeddings & Representation Learning" },
      ],
      notes: [
        {
          id: "n1-1",
          title: "Module 01 — Lecture Slides (Prof. Shraddha Jadhav)",
          description: "Full lecture slides: AI hierarchy, discriminative vs generative, entropy, variational inference, evaluation metrics",
          type: "pdf",
          url: "/Module-I-Introduction-to-Generative-AI.pdf",
          downloadUrl: "/Module-I-Introduction-to-Generative-AI.pdf",
        },
        {
          id: "n1-2",
          title: "Handwritten Notes — Prof. Shraddha Jadhav",
          description: "Concise handwritten notes covering all Module I topics",
          type: "pdf",
          url: "/NOTES-SJ.pdf",
          downloadUrl: "/NOTES-SJ.pdf",
        },
        {
          id: "n1-3",
          title: "AIM3002P Syllabus",
          description: "Official course syllabus with lab list and references",
          type: "pdf",
          url: "/AIM3002P-Syllabus.pdf",
          downloadUrl: "/AIM3002P-Syllabus.pdf",
        },
      ],
      importantQuestions: [
        { id: "q1-1", moduleId: "module-1", question: "Differentiate between discriminative and generative models with examples.", type: "long" },
        { id: "q1-2", moduleId: "module-1", question: "Explain the architecture of GPT-2 and how it generates text.", type: "long" },
        { id: "q1-3", moduleId: "module-1", question: "What are the key components of the Hugging Face Transformers library?", type: "short" },
        { id: "q1-4", moduleId: "module-1", question: "List five real-world applications of generative AI.", type: "short" },
        { id: "q1-5", moduleId: "module-1", question: "Explain autoregressive text generation and its limitations.", type: "conceptual" },
      ],
    },
    {
      id: "module-2",
      number: 2,
      title: "Prompt Engineering & Core Architectures",
      description:
        "Anatomy of a good prompt, zero/one/few-shot prompting, CoT prompting, encoder-decoder architecture, and transformers.",
      overview:
        "This module covers the systematic process of prompt engineering — the R-T-C-C-O framework (Role, Task, Context, Constraints, Output), zero-shot vs few-shot prompting, instruction-based prompting, role-based prompting, Chain-of-Thought prompting, hallucinations, prompt refinement best practices, and core architectures including encoder-decoder models, transformers, self-attention, multi-head attention, and the Query-Key-Value mechanism.",
      topics: [
        { id: "t2-1", title: "What is Prompt Engineering? — R-T-C-C-O Framework" },
        { id: "t2-2", title: "Zero-Shot, One-Shot & Few-Shot Prompting" },
        { id: "t2-3", title: "Instruction-Based & Role-Based Prompting" },
        { id: "t2-4", title: "Chain-of-Thought (CoT) Prompting" },
        { id: "t2-5", title: "Hallucinations, Prompt Refinement & Best Practices" },
        { id: "t2-6", title: "Encoder-Decoder, Transformer & Attention Mechanisms" },
      ],
      notes: [
        {
          id: "n2-1",
          title: "Module 02 — Lecture Slides (Prof. Shraddha Jadhav)",
          description: "Prompt engineering techniques, encoder-decoder, transformers, and attention mechanisms",
          type: "pdf",
          url: "/Module-II-Prompt-Engineering.pdf",
          downloadUrl: "/Module-II-Prompt-Engineering.pdf",
        },
        {
          id: "n2-2",
          title: "Handwritten Notes — Prof. Shraddha Jadhav",
          description: "Concise notes covering prompt engineering and architectures",
          type: "pdf",
          url: "/NOTES-SJ.pdf",
          downloadUrl: "/NOTES-SJ.pdf",
        },
      ],
      importantQuestions: [
        { id: "q2-1", moduleId: "module-2", question: "What is prompt engineering? Why is it important for LLMs?", type: "short" },
        { id: "q2-2", moduleId: "module-2", question: "Compare basic prompting and instruction-based prompting with examples.", type: "long" },
        { id: "q2-3", moduleId: "module-2", question: "How does DistilGPT-2 differ from GPT-2? What are the trade-offs?", type: "conceptual" },
        { id: "q2-4", moduleId: "module-2", question: "Design a prompt template for summarizing a research paper.", type: "long" },
        { id: "q2-5", moduleId: "module-2", question: "Explain zero-shot and few-shot prompting.", type: "short" },
      ],
    },
    {
      id: "module-3",
      number: 3,
      title: "Advanced Prompt Techniques",
      description:
        "Chain-of-Thought prompting, role-based prompting, and manual evaluation strategies.",
      overview:
        "This module explores advanced prompting strategies that significantly improve LLM outputs. You will learn Chain-of-Thought (CoT) prompting for step-by-step reasoning, role-based prompting for specialized responses, and techniques for manually evaluating prompt quality and model outputs.",
      topics: [
        { id: "t3-1", title: "Chain-of-Thought (CoT) Prompting" },
        { id: "t3-2", title: "Role-Based Prompting" },
        { id: "t3-3", title: "Few-Shot vs. Zero-Shot Prompting" },
        { id: "t3-4", title: "Prompt Chaining and Decomposition" },
        { id: "t3-5", title: "Manual Evaluation of Model Outputs" },
        { id: "t3-6", title: "Common Prompting Pitfalls and Best Practices" },
      ],
      notes: [
        {
          id: "n3-1",
          title: "Module 03 — Lecture Notes",
          description: "Advanced prompt engineering strategies",
          type: "pdf",
          url: "#",
          downloadUrl: "#",
        },
      ],
      importantQuestions: [
        { id: "q3-1", moduleId: "module-3", question: "Explain Chain-of-Thought (CoT) prompting with an example.", type: "long" },
        { id: "q3-2", moduleId: "module-3", question: "What is role-based prompting? Give three examples of effective roles.", type: "short" },
        { id: "q3-3", moduleId: "module-3", question: "Compare few-shot and zero-shot prompting techniques.", type: "conceptual" },
        { id: "q3-4", moduleId: "module-3", question: "How do you manually evaluate the quality of LLM-generated outputs?", type: "long" },
        { id: "q3-5", moduleId: "module-3", question: "What is prompt chaining? When should it be used?", type: "short" },
      ],
    },
    {
      id: "module-4",
      number: 4,
      title: "Variational Autoencoders (VAEs)",
      description:
        "Understanding VAE architecture, latent space representation, and image reconstruction.",
      overview:
        "Variational Autoencoders are generative models that learn to encode data into a continuous latent space and decode it back. This module covers VAE architecture, the reparameterization trick, KL divergence, latent space visualization, and hands-on reconstruction of MNIST images using pre-trained VAEs.",
      topics: [
        { id: "t4-1", title: "Autoencoder Fundamentals" },
        { id: "t4-2", title: "VAE Architecture — Encoder, Decoder, Latent Space" },
        { id: "t4-3", title: "The Reparameterization Trick" },
        { id: "t4-4", title: "KL Divergence and ELBO Loss" },
        { id: "t4-5", title: "MNIST Reconstruction with Pre-trained VAE" },
        { id: "t4-6", title: "Latent Space Visualization and Interpolation" },
      ],
      notes: [
        {
          id: "n4-1",
          title: "Module 04 — Lecture Notes",
          description: "Variational Autoencoders theory and implementation",
          type: "pdf",
          url: "#",
          downloadUrl: "#",
        },
      ],
      importantQuestions: [
        { id: "q4-1", moduleId: "module-4", question: "Explain the architecture of a Variational Autoencoder with a diagram.", type: "long" },
        { id: "q4-2", moduleId: "module-4", question: "What is the reparameterization trick? Why is it necessary for training?", type: "long" },
        { id: "q4-3", moduleId: "module-4", question: "Define KL Divergence and explain its role in the VAE loss function.", type: "short" },
        { id: "q4-4", moduleId: "module-4", question: "How does a VAE differ from a standard autoencoder?", type: "conceptual" },
        { id: "q4-5", moduleId: "module-4", question: "Explain latent space interpolation and its applications.", type: "short" },
      ],
    },
    {
      id: "module-5",
      number: 5,
      title: "Generative Adversarial Networks (GANs)",
      description:
        "GAN architecture, DCGAN implementation, and techniques for generating and visualizing samples.",
      overview:
        "GANs consist of a generator and discriminator network trained in an adversarial manner. This module covers the original GAN framework, Deep Convolutional GANs (DCGAN), training dynamics, mode collapse, and hands-on generation of images using pre-trained DCGAN models.",
      topics: [
        { id: "t5-1", title: "GAN Architecture — Generator and Discriminator" },
        { id: "t5-2", title: "Adversarial Training Process" },
        { id: "t5-3", title: "Deep Convolutional GAN (DCGAN)" },
        { id: "t5-4", title: "Mode Collapse and Training Challenges" },
        { id: "t5-5", title: "Generating and Visualizing Samples" },
        { id: "t5-6", title: "GAN Variants — WGAN, StyleGAN, CycleGAN" },
      ],
      notes: [
        {
          id: "n5-1",
          title: "Module 05 — Lecture Notes",
          description: "GANs theory, DCGAN architecture, and training",
          type: "pdf",
          url: "#",
          downloadUrl: "#",
        },
      ],
      importantQuestions: [
        { id: "q5-1", moduleId: "module-5", question: "Explain the GAN architecture. How do the generator and discriminator interact?", type: "long" },
        { id: "q5-2", moduleId: "module-5", question: "What is mode collapse in GANs? How can it be mitigated?", type: "long" },
        { id: "q5-3", moduleId: "module-5", question: "Describe the DCGAN architecture and its key design principles.", type: "short" },
        { id: "q5-4", moduleId: "module-5", question: "Compare VAEs and GANs as generative models.", type: "conceptual" },
        { id: "q5-5", moduleId: "module-5", question: "What is the Wasserstein loss? How does WGAN improve training stability?", type: "long" },
      ],
    },
    {
      id: "module-6",
      number: 6,
      title: "Diffusion Models",
      description:
        "Diffusion process, denoising, Stable Diffusion, and text-to-image generation.",
      overview:
        "Diffusion models generate data by learning to reverse a noise-adding process. This module covers the forward and reverse diffusion process, denoising score matching, and hands-on text-to-image generation using pre-trained Stable Diffusion models. You will understand why diffusion models have become the state-of-the-art in image generation.",
      topics: [
        { id: "t6-1", title: "Forward and Reverse Diffusion Process" },
        { id: "t6-2", title: "Denoising Score Matching" },
        { id: "t6-3", title: "U-Net Architecture in Diffusion Models" },
        { id: "t6-4", title: "Stable Diffusion Architecture" },
        { id: "t6-5", title: "Text-to-Image Generation Pipeline" },
        { id: "t6-6", title: "Classifier-Free Guidance" },
      ],
      notes: [
        {
          id: "n6-1",
          title: "Module 06 — Lecture Notes",
          description: "Diffusion models and Stable Diffusion",
          type: "pdf",
          url: "#",
          downloadUrl: "#",
        },
      ],
      importantQuestions: [
        { id: "q6-1", moduleId: "module-6", question: "Explain the forward and reverse diffusion process.", type: "long" },
        { id: "q6-2", moduleId: "module-6", question: "How does Stable Diffusion generate images from text prompts?", type: "long" },
        { id: "q6-3", moduleId: "module-6", question: "Compare diffusion models with GANs for image generation.", type: "conceptual" },
        { id: "q6-4", moduleId: "module-6", question: "What is classifier-free guidance? How does it improve generation quality?", type: "short" },
        { id: "q6-5", moduleId: "module-6", question: "Describe the role of U-Net in diffusion models.", type: "short" },
      ],
    },
    {
      id: "module-7",
      number: 7,
      title: "LLM Fine-Tuning and LoRA",
      description:
        "Parameter-efficient fine-tuning, LoRA adapters, and fine-tuning DistilBERT for downstream tasks.",
      overview:
        "Fine-tuning adapts pre-trained language models for specific tasks. This module covers full fine-tuning vs. parameter-efficient methods, LoRA (Low-Rank Adaptation), and hands-on fine-tuning of DistilBERT with LoRA on a small dataset. You will understand how to efficiently customize LLMs without training all parameters.",
      topics: [
        { id: "t7-1", title: "Why Fine-Tune LLMs?" },
        { id: "t7-2", title: "Full Fine-Tuning vs. Parameter-Efficient Fine-Tuning (PEFT)" },
        { id: "t7-3", title: "LoRA — Low-Rank Adaptation" },
        { id: "t7-4", title: "Fine-Tuning DistilBERT with LoRA" },
        { id: "t7-5", title: "Dataset Preparation for Fine-Tuning" },
        { id: "t7-6", title: "Evaluation of Fine-Tuned Models" },
      ],
      notes: [
        {
          id: "n7-1",
          title: "Module 07 — Lecture Notes",
          description: "LLM fine-tuning and LoRA techniques",
          type: "pdf",
          url: "#",
          downloadUrl: "#",
        },
      ],
      importantQuestions: [
        { id: "q7-1", moduleId: "module-7", question: "What is LoRA? How does it reduce the number of trainable parameters?", type: "long" },
        { id: "q7-2", moduleId: "module-7", question: "Compare full fine-tuning and parameter-efficient fine-tuning (PEFT).", type: "short" },
        { id: "q7-3", moduleId: "module-7", question: "Explain the steps to fine-tune DistilBERT with LoRA.", type: "long" },
        { id: "q7-4", moduleId: "module-7", question: "What are the advantages of LoRA over full fine-tuning?", type: "conceptual" },
        { id: "q7-5", moduleId: "module-7", question: "How do you prepare and format a dataset for LLM fine-tuning?", type: "short" },
      ],
    },
    {
      id: "module-8",
      number: 8,
      title: "LangChain, Chatbots, and Deployment",
      description:
        "Building chatbots with LangChain, deploying GenAI apps with Gradio, safety mechanisms, and evaluation metrics.",
      overview:
        "This module covers the practical deployment side of generative AI. You will learn to build Q&A chatbots by integrating LLaMA-2 with LangChain, deploy Stable Diffusion applications via Gradio with safety filters, and evaluate generative models using metrics like FID (Fréchet Inception Distance). The module covers responsible AI deployment practices.",
      topics: [
        { id: "t8-1", title: "Introduction to LangChain Framework" },
        { id: "t8-2", title: "Building a Q&A Chatbot with LLaMA-2" },
        { id: "t8-3", title: "LangChain Chains, Prompts, and Memory" },
        { id: "t8-4", title: "Deploying GenAI Apps with Gradio" },
        { id: "t8-5", title: "Safety Filters and Responsible AI" },
        { id: "t8-6", title: "Evaluation Metrics — FID, IS, BLEU, ROUGE" },
      ],
      notes: [
        {
          id: "n8-1",
          title: "Module 08 — Lecture Notes",
          description: "LangChain chatbots, Gradio deployment, and evaluation",
          type: "pdf",
          url: "#",
          downloadUrl: "#",
        },
      ],
      importantQuestions: [
        { id: "q8-1", moduleId: "module-8", question: "Explain the LangChain framework. What are chains and agents?", type: "long" },
        { id: "q8-2", moduleId: "module-8", question: "How do you build a Q&A chatbot using LLaMA-2 and LangChain?", type: "long" },
        { id: "q8-3", moduleId: "module-8", question: "What is FID (Fréchet Inception Distance)? How is it used to evaluate generative models?", type: "short" },
        { id: "q8-4", moduleId: "module-8", question: "Describe the steps to deploy a Stable Diffusion app using Gradio.", type: "long" },
        { id: "q8-5", moduleId: "module-8", question: "What safety mechanisms should be implemented when deploying generative AI applications?", type: "conceptual" },
      ],
    },
  ],

  // ─── LABS (from syllabus) ─────────────────────────────────────

  labs: [
    {
      id: "lab-1",
      number: 1,
      title: "Introduction to GenAI Tools",
      objective: "Install and explore Hugging Face Transformers, generate text with GPT-2, and visualize discriminative vs. generative outputs.",
      theory:
        "Generative AI models learn the underlying data distribution to generate new samples, while discriminative models learn decision boundaries. Hugging Face provides a unified API for accessing thousands of pre-trained models. GPT-2 is an autoregressive transformer model that generates text token by token.",
      requirements: ["Python 3.8+", "Jupyter Notebook", "Hugging Face Transformers", "PyTorch", "Matplotlib"],
      procedure: [
        "Install Hugging Face Transformers: pip install transformers torch",
        "Import the pipeline module from transformers",
        "Create a text-generation pipeline with GPT-2",
        "Generate text with different prompts and parameters (temperature, top_k, top_p)",
        "Create a text-classification pipeline (discriminative) for comparison",
        "Compare outputs of generative vs discriminative models",
        "Visualize token probabilities for generated text",
        "Experiment with max_length and num_return_sequences",
      ],
      code: `from transformers import pipeline
import matplotlib.pyplot as plt

# Generative Model - GPT-2
generator = pipeline('text-generation', model='gpt2')
gen_output = generator(
    "Artificial intelligence is",
    max_length=50,
    num_return_sequences=3,
    temperature=0.7,
    top_k=50
)

print("=== Generative Output (GPT-2) ===")
for i, output in enumerate(gen_output):
    print(f"\\nSample {i+1}: {output['generated_text']}")

# Discriminative Model - Sentiment Classification
classifier = pipeline('sentiment-analysis')
disc_output = classifier([
    "I love this product!",
    "This is terrible.",
    "It's okay, nothing special."
])

print("\\n=== Discriminative Output (Sentiment) ===")
for text, result in zip(
    ["I love this product!", "This is terrible.", "It's okay"],
    disc_output
):
    print(f"{text} -> {result['label']} ({result['score']:.4f})")`,
      codeLanguage: "python",
      expectedOutput: "=== Generative Output (GPT-2) ===\nSample 1: Artificial intelligence is transforming the way we...\nSample 2: Artificial intelligence is a field that...\nSample 3: Artificial intelligence is becoming increasingly...\n\n=== Discriminative Output (Sentiment) ===\nI love this product! -> POSITIVE (0.9998)\nThis is terrible. -> NEGATIVE (0.9994)\nIt's okay -> NEGATIVE (0.9042)",
      vivaQuestions: [
        "What is the difference between generative and discriminative models?",
        "How does GPT-2 generate text token by token?",
        "What are temperature and top_k in text generation?",
        "What is the Hugging Face pipeline API?",
      ],
      resources: ["Hugging Face Transformers Documentation", "GPT-2 Paper"],
    },
    {
      id: "lab-2",
      number: 2,
      title: "Basic Prompt Engineering",
      objective: "Implement basic and instruction-based prompting with DistilGPT-2.",
      theory:
        "Prompt engineering is the practice of designing effective inputs for language models to produce desired outputs. Basic prompting involves simple text completion, while instruction-based prompting provides explicit instructions for the model to follow. DistilGPT-2 is a smaller, faster version of GPT-2 suitable for experimentation.",
      requirements: ["Python 3.8+", "Jupyter Notebook", "Hugging Face Transformers", "PyTorch"],
      procedure: [
        "Load DistilGPT-2 using the Hugging Face pipeline",
        "Implement basic prompting with simple text completion",
        "Design instruction-based prompts (e.g., 'Summarize:', 'Translate:', 'Explain:')",
        "Compare outputs for different prompt styles",
        "Experiment with prompt length and specificity",
        "Evaluate quality of generated outputs manually",
        "Document which prompt styles produce better results",
      ],
      code: `from transformers import pipeline

generator = pipeline('text-generation', model='distilgpt2')

# Basic Prompting
basic_prompts = [
    "The future of artificial intelligence",
    "Machine learning algorithms can",
    "Deep learning is important because",
]

print("=== Basic Prompting ===")
for prompt in basic_prompts:
    output = generator(prompt, max_length=60, num_return_sequences=1)
    print(f"Prompt: {prompt}")
    print(f"Output: {output[0]['generated_text']}\\n")

# Instruction-Based Prompting
instruction_prompts = [
    "Explain in simple terms: What is a neural network?",
    "List three advantages of deep learning:",
    "Summarize: GANs are generative models that use two networks...",
]

print("=== Instruction-Based Prompting ===")
for prompt in instruction_prompts:
    output = generator(prompt, max_length=100, num_return_sequences=1)
    print(f"Prompt: {prompt}")
    print(f"Output: {output[0]['generated_text']}\\n")`,
      codeLanguage: "python",
      expectedOutput: "Generated text completions for basic prompts.\nInstruction-following responses (quality varies with DistilGPT-2).\nComparison showing instruction-based prompts guide output better.",
      vivaQuestions: [
        "What is prompt engineering and why is it important?",
        "How does DistilGPT-2 differ from GPT-2?",
        "What makes an effective instruction-based prompt?",
        "How do you evaluate the quality of generated text?",
      ],
      resources: ["Prompt Engineering Guide", "DistilGPT-2 Model Card"],
    },
    {
      id: "lab-3",
      number: 3,
      title: "Advanced Prompt Techniques",
      objective: "Apply Chain-of-Thought (CoT) and role-based prompting, evaluate outputs manually.",
      theory:
        "Chain-of-Thought prompting encourages models to show intermediate reasoning steps, leading to better answers for complex tasks. Role-based prompting assigns a specific persona or role to the model, which helps focus its responses. These techniques significantly improve output quality on reasoning and specialized tasks.",
      requirements: ["Python 3.8+", "Jupyter Notebook", "Hugging Face Transformers", "PyTorch"],
      procedure: [
        "Implement standard prompts for comparison (baseline)",
        "Design Chain-of-Thought prompts with step-by-step reasoning",
        "Compare CoT vs standard prompt outputs on reasoning tasks",
        "Create role-based prompts (e.g., 'You are a teacher:', 'As a data scientist:')",
        "Evaluate outputs using manual quality assessment criteria",
        "Document improvements from advanced techniques",
        "Create a prompt evaluation rubric",
      ],
      code: `from transformers import pipeline

generator = pipeline('text-generation', model='gpt2')

# Standard Prompt
standard = "What is 15% of 80?"
output_std = generator(standard, max_length=50)
print("Standard:", output_std[0]['generated_text'])

# Chain-of-Thought Prompt
cot = """Q: What is 15% of 80?
Let me solve this step by step:
Step 1: Convert 15% to a decimal: 15/100 = 0.15
Step 2: Multiply 0.15 × 80 = 12
Answer: 12

Q: What is 25% of 200?
Let me solve this step by step:"""

output_cot = generator(cot, max_length=150)
print("\\nCoT:", output_cot[0]['generated_text'])

# Role-Based Prompt
role = """You are an expert machine learning engineer.
Explain the concept of overfitting to a beginner:"""

output_role = generator(role, max_length=150)
print("\\nRole-based:", output_role[0]['generated_text'])`,
      codeLanguage: "python",
      expectedOutput: "Standard prompt produces basic/incorrect answers.\nCoT prompt shows step-by-step reasoning with improved accuracy.\nRole-based prompt provides more focused, expert-level explanations.",
      vivaQuestions: [
        "What is Chain-of-Thought prompting?",
        "How does role-based prompting improve outputs?",
        "What criteria do you use to manually evaluate prompt quality?",
        "Compare zero-shot and few-shot CoT prompting.",
      ],
      resources: ["Chain-of-Thought Prompting Paper (Wei et al., 2022)", "OpenAI Prompt Engineering Guide"],
    },
    {
      id: "lab-4",
      number: 4,
      title: "Build a Simple VAE",
      objective: "Load a pre-trained VAE for MNIST reconstruction and visualize the latent space.",
      theory:
        "A Variational Autoencoder consists of an encoder that maps input to a latent distribution and a decoder that reconstructs input from latent samples. The training objective combines reconstruction loss and KL divergence. The latent space is continuous and structured, allowing for interpolation between data points.",
      requirements: ["Python 3.8+", "Jupyter Notebook", "PyTorch", "Torchvision", "Matplotlib", "NumPy"],
      procedure: [
        "Define VAE architecture with encoder and decoder networks",
        "Implement the reparameterization trick",
        "Define VAE loss function (reconstruction + KL divergence)",
        "Load MNIST dataset using torchvision",
        "Train or load pre-trained VAE model",
        "Reconstruct MNIST images through the VAE",
        "Visualize original vs reconstructed images side by side",
        "Sample from latent space and generate new digits",
        "Create 2D latent space visualization with color-coded digits",
      ],
      code: `import torch
import torch.nn as nn
from torchvision import datasets, transforms
import matplotlib.pyplot as plt

class VAE(nn.Module):
    def __init__(self, latent_dim=2):
        super().__init__()
        self.encoder = nn.Sequential(
            nn.Linear(784, 400), nn.ReLU(),
            nn.Linear(400, 200), nn.ReLU()
        )
        self.fc_mu = nn.Linear(200, latent_dim)
        self.fc_var = nn.Linear(200, latent_dim)
        self.decoder = nn.Sequential(
            nn.Linear(latent_dim, 200), nn.ReLU(),
            nn.Linear(200, 400), nn.ReLU(),
            nn.Linear(400, 784), nn.Sigmoid()
        )

    def encode(self, x):
        h = self.encoder(x.view(-1, 784))
        return self.fc_mu(h), self.fc_var(h)

    def reparameterize(self, mu, log_var):
        std = torch.exp(0.5 * log_var)
        eps = torch.randn_like(std)
        return mu + eps * std

    def forward(self, x):
        mu, log_var = self.encode(x)
        z = self.reparameterize(mu, log_var)
        return self.decoder(z), mu, log_var

# Load MNIST
transform = transforms.ToTensor()
mnist = datasets.MNIST('./data', download=True, transform=transform)
loader = torch.utils.data.DataLoader(mnist, batch_size=128, shuffle=True)

# Train VAE (simplified)
vae = VAE(latent_dim=2)
optimizer = torch.optim.Adam(vae.parameters(), lr=1e-3)

print("Training VAE on MNIST...")
# Training loop would go here

# Visualize latent space
print("Visualizing latent space...")`,
      codeLanguage: "python",
      expectedOutput: "Trained VAE model on MNIST.\nReconstruction comparison (original vs. decoded images).\n2D latent space plot with color-coded digit clusters.",
      vivaQuestions: [
        "Explain the reparameterization trick and why it's needed.",
        "What is KL divergence in the context of VAEs?",
        "How does latent space interpolation work?",
        "Compare the quality of VAE reconstructions vs. original images.",
      ],
      resources: ["Auto-Encoding Variational Bayes (Kingma & Welling, 2014)", "PyTorch VAE Tutorial"],
    },
    {
      id: "lab-5",
      number: 5,
      title: "Simple GAN Exploration",
      objective: "Load a pre-trained DCGAN, generate and visualize image samples.",
      theory:
        "Deep Convolutional GANs (DCGANs) use convolutional layers in both the generator and discriminator. The generator transforms random noise into realistic images, while the discriminator learns to distinguish real from generated images. Key architectural guidelines include using batch normalization, ReLU/LeakyReLU activations, and strided convolutions.",
      requirements: ["Python 3.8+", "Jupyter Notebook", "PyTorch", "Torchvision", "Matplotlib"],
      procedure: [
        "Define DCGAN generator and discriminator architectures",
        "Load pre-trained DCGAN weights or train on a simple dataset",
        "Generate random noise vectors (latent vectors)",
        "Pass noise through the generator to create images",
        "Visualize a grid of generated images",
        "Experiment with different noise vectors",
        "Perform latent space interpolation between two noise vectors",
        "Visualize the interpolation results",
      ],
      code: `import torch
import torch.nn as nn
import matplotlib.pyplot as plt
import numpy as np

class Generator(nn.Module):
    def __init__(self, latent_dim=100):
        super().__init__()
        self.main = nn.Sequential(
            nn.ConvTranspose2d(latent_dim, 256, 4, 1, 0, bias=False),
            nn.BatchNorm2d(256), nn.ReLU(True),
            nn.ConvTranspose2d(256, 128, 4, 2, 1, bias=False),
            nn.BatchNorm2d(128), nn.ReLU(True),
            nn.ConvTranspose2d(128, 64, 4, 2, 1, bias=False),
            nn.BatchNorm2d(64), nn.ReLU(True),
            nn.ConvTranspose2d(64, 1, 4, 2, 1, bias=False),
            nn.Tanh()
        )

    def forward(self, x):
        return self.main(x)

# Load generator
gen = Generator(latent_dim=100)
# gen.load_state_dict(torch.load('dcgan_generator.pth'))
gen.eval()

# Generate samples
noise = torch.randn(16, 100, 1, 1)
with torch.no_grad():
    fake_images = gen(noise)

# Visualize
fig, axes = plt.subplots(4, 4, figsize=(8, 8))
for i, ax in enumerate(axes.flat):
    ax.imshow(fake_images[i, 0].numpy(), cmap='gray')
    ax.axis('off')
plt.suptitle('DCGAN Generated Samples')
plt.show()`,
      codeLanguage: "python",
      expectedOutput: "4×4 grid of generated grayscale images.\nLatent space interpolation showing smooth transitions.\nVisualization of generator outputs from different noise vectors.",
      vivaQuestions: [
        "How does the DCGAN generator create images from noise?",
        "What is the role of batch normalization in DCGANs?",
        "Explain the adversarial training process.",
        "What is mode collapse and how do you detect it?",
      ],
      resources: ["Unsupervised Representation Learning with DCGANs (Radford et al., 2016)", "PyTorch DCGAN Tutorial"],
    },
    {
      id: "lab-6",
      number: 6,
      title: "Image Generation with Diffusion",
      objective: "Use pre-trained Stable Diffusion for text-to-image generation.",
      theory:
        "Stable Diffusion is a latent diffusion model that generates images by iteratively denoising a random noise tensor. It operates in a compressed latent space using a VAE encoder/decoder, guided by text embeddings from a CLIP text encoder. The U-Net predicts noise at each denoising step.",
      requirements: ["Python 3.8+", "Jupyter Notebook", "Diffusers Library", "PyTorch", "Transformers", "Accelerate"],
      procedure: [
        "Install the diffusers library: pip install diffusers accelerate",
        "Load the Stable Diffusion pipeline from Hugging Face",
        "Generate images from text prompts",
        "Experiment with different prompts, guidance scales, and steps",
        "Compare outputs with different random seeds",
        "Explore negative prompts for quality control",
        "Save and display generated images",
        "Analyze the effect of inference steps on quality",
      ],
      code: `from diffusers import StableDiffusionPipeline
import torch
import matplotlib.pyplot as plt

# Load Stable Diffusion
pipe = StableDiffusionPipeline.from_pretrained(
    "runwayml/stable-diffusion-v1-5",
    torch_dtype=torch.float16
)
pipe = pipe.to("cuda" if torch.cuda.is_available() else "cpu")

# Generate image from text
prompt = "A futuristic university campus with AI robots teaching students"
negative_prompt = "blurry, low quality, distorted"

image = pipe(
    prompt,
    negative_prompt=negative_prompt,
    num_inference_steps=50,
    guidance_scale=7.5
).images[0]

# Display
plt.figure(figsize=(8, 8))
plt.imshow(image)
plt.title(f"Prompt: {prompt}")
plt.axis('off')
plt.show()

# Save
image.save("generated_campus.png")
print("Image saved!")`,
      codeLanguage: "python",
      expectedOutput: "High-quality generated image matching the text prompt.\nComparison of images at different guidance scales.\nEffect of inference steps on image quality.",
      vivaQuestions: [
        "How does Stable Diffusion generate images from text?",
        "What is classifier-free guidance and how does guidance_scale affect output?",
        "What role does the CLIP text encoder play in Stable Diffusion?",
        "How do negative prompts improve generation quality?",
      ],
      resources: ["Stable Diffusion Paper", "Hugging Face Diffusers Documentation"],
    },
    {
      id: "lab-7",
      number: 7,
      title: "LLM Fine-Tuning with LoRA",
      objective: "Lightly fine-tune DistilBERT with LoRA on a small dataset.",
      theory:
        "LoRA (Low-Rank Adaptation) is a parameter-efficient fine-tuning technique that adds trainable low-rank matrices to existing model weights. Instead of updating all parameters, LoRA only trains a small number of additional parameters, dramatically reducing memory and compute requirements while maintaining performance.",
      requirements: ["Python 3.8+", "Jupyter Notebook", "Transformers", "PEFT", "Datasets", "PyTorch"],
      procedure: [
        "Install PEFT library: pip install peft",
        "Load DistilBERT model and tokenizer",
        "Load a small dataset (e.g., IMDB subset or custom dataset)",
        "Configure LoRA parameters (rank, alpha, target modules)",
        "Apply LoRA adapters to the model",
        "Set up training arguments (epochs, learning rate, batch size)",
        "Train the model with LoRA adapters",
        "Evaluate on test set and compare with base model",
        "Save and load the LoRA adapter weights",
      ],
      code: `from transformers import (AutoModelForSequenceClassification,
                          AutoTokenizer, TrainingArguments, Trainer)
from peft import LoraConfig, get_peft_model, TaskType
from datasets import load_dataset

# Load model and tokenizer
model_name = "distilbert-base-uncased"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForSequenceClassification.from_pretrained(
    model_name, num_labels=2
)

# Configure LoRA
lora_config = LoraConfig(
    task_type=TaskType.SEQ_CLS,
    r=8,                    # Rank
    lora_alpha=32,          # Scaling factor
    lora_dropout=0.1,
    target_modules=["q_lin", "v_lin"]  # DistilBERT attention layers
)

# Apply LoRA
model = get_peft_model(model, lora_config)
model.print_trainable_parameters()
# Output: trainable params: 0.6M || all params: 67M || trainable%: 0.89%

# Load and tokenize dataset
dataset = load_dataset("imdb", split="train[:1000]")
def tokenize(examples):
    return tokenizer(examples["text"], truncation=True, max_length=256)
dataset = dataset.map(tokenize, batched=True)

# Train
training_args = TrainingArguments(
    output_dir="./lora-distilbert",
    num_train_epochs=3,
    per_device_train_batch_size=16,
    learning_rate=2e-4,
    logging_steps=50,
)

trainer = Trainer(model=model, args=training_args,
                  train_dataset=dataset)
trainer.train()
print("Fine-tuning complete!")`,
      codeLanguage: "python",
      expectedOutput: "trainable params: ~600K || all params: ~67M || trainable%: ~0.89%\nTraining loss decreasing over 3 epochs.\nImproved classification accuracy vs. base model.",
      vivaQuestions: [
        "What is LoRA and how does it work?",
        "What are the key hyperparameters in LoRA (rank, alpha)?",
        "Why is parameter-efficient fine-tuning important?",
        "How do you select target modules for LoRA?",
      ],
      resources: ["LoRA Paper (Hu et al., 2021)", "PEFT Library Documentation", "Hugging Face Fine-Tuning Guide"],
    },
    {
      id: "lab-8",
      number: 8,
      title: "Build a Chatbot with LangChain",
      objective: "Integrate LLaMA-2 with LangChain for a Q&A chatbot.",
      theory:
        "LangChain is a framework for developing applications powered by language models. It provides tools for prompt management, chaining multiple LLM calls, memory for conversational context, and integration with external data sources. Combined with LLaMA-2, it enables building sophisticated Q&A systems.",
      requirements: ["Python 3.8+", "Jupyter Notebook", "LangChain", "Transformers", "PyTorch", "Accelerate"],
      procedure: [
        "Install LangChain: pip install langchain langchain-community",
        "Load LLaMA-2 model using Hugging Face pipeline",
        "Create a LangChain LLM wrapper",
        "Design a prompt template for Q&A",
        "Build a simple chain (prompt + LLM)",
        "Add conversation memory for multi-turn dialogue",
        "Test the chatbot with various questions",
        "Evaluate response quality and relevance",
      ],
      code: `from langchain_community.llms import HuggingFacePipeline
from langchain.chains import ConversationChain
from langchain.memory import ConversationBufferMemory
from langchain.prompts import PromptTemplate
from transformers import pipeline

# Load model (using a smaller model for demo)
pipe = pipeline("text-generation", model="distilgpt2",
                max_new_tokens=150, temperature=0.7)
llm = HuggingFacePipeline(pipeline=pipe)

# Create prompt template
template = """You are a helpful AI assistant for a Generative AI course.
Answer questions clearly and concisely.

Current conversation:
{history}

Student: {input}
Assistant:"""

prompt = PromptTemplate(
    input_variables=["history", "input"],
    template=template
)

# Build chatbot with memory
memory = ConversationBufferMemory()
chatbot = ConversationChain(
    llm=llm,
    memory=memory,
    prompt=prompt,
    verbose=True
)

# Test conversation
questions = [
    "What is a GAN?",
    "How does the generator work?",
    "What is mode collapse?",
]

for q in questions:
    print(f"Student: {q}")
    response = chatbot.predict(input=q)
    print(f"Assistant: {response}\\n")`,
      codeLanguage: "python",
      expectedOutput: "Multi-turn conversation with context awareness.\nAssistant provides relevant answers about GenAI topics.\nConversation memory maintains context across turns.",
      vivaQuestions: [
        "What is LangChain and what problems does it solve?",
        "Explain the concept of chains in LangChain.",
        "How does conversation memory work in a chatbot?",
        "What are the advantages of using LLaMA-2 for a chatbot?",
      ],
      resources: ["LangChain Documentation", "LLaMA-2 Paper", "Hugging Face LLaMA Guide"],
    },
    {
      id: "lab-9",
      number: 9,
      title: "Deployment and Evaluation",
      objective: "Deploy Stable Diffusion via Gradio with a safety filter and evaluate with FID.",
      theory:
        "Gradio is a Python library for building interactive web demos for ML models. FID (Fréchet Inception Distance) is a metric that measures the quality of generated images by comparing their feature distributions to real images. Lower FID indicates higher quality and diversity. Safety filters help prevent generation of harmful content.",
      requirements: ["Python 3.8+", "Jupyter Notebook", "Gradio", "Diffusers", "PyTorch", "scipy", "torchvision"],
      procedure: [
        "Install Gradio: pip install gradio",
        "Load Stable Diffusion pipeline",
        "Implement a safety filter for NSFW content detection",
        "Create a Gradio interface with text input and image output",
        "Add controls for guidance scale and inference steps",
        "Deploy the Gradio app locally",
        "Implement FID calculation between generated and real images",
        "Evaluate a batch of generated images using FID",
      ],
      code: `import gradio as gr
from diffusers import StableDiffusionPipeline
import torch

# Load model
pipe = StableDiffusionPipeline.from_pretrained(
    "runwayml/stable-diffusion-v1-5",
    torch_dtype=torch.float16,
    safety_checker=None  # We'll add custom safety
)
pipe = pipe.to("cuda" if torch.cuda.is_available() else "cpu")

# Simple safety filter
BLOCKED_WORDS = ["violence", "harmful", "explicit"]

def generate_image(prompt, guidance_scale, num_steps):
    # Safety check
    if any(word in prompt.lower() for word in BLOCKED_WORDS):
        return None, "⚠️ Prompt blocked by safety filter."

    image = pipe(
        prompt,
        guidance_scale=guidance_scale,
        num_inference_steps=int(num_steps)
    ).images[0]
    return image, f"✅ Generated with guidance={guidance_scale}, steps={num_steps}"

# Gradio Interface
demo = gr.Interface(
    fn=generate_image,
    inputs=[
        gr.Textbox(label="Prompt", placeholder="Describe the image..."),
        gr.Slider(1, 20, value=7.5, label="Guidance Scale"),
        gr.Slider(10, 100, value=50, step=5, label="Inference Steps"),
    ],
    outputs=[
        gr.Image(label="Generated Image"),
        gr.Textbox(label="Status"),
    ],
    title="🎨 Stable Diffusion Image Generator",
    description="Generate images from text prompts with safety filtering.",
)

demo.launch(share=True)
print("Gradio app launched!")`,
      codeLanguage: "python",
      expectedOutput: "Gradio web interface running on localhost.\nText-to-image generation with adjustable parameters.\nSafety filter blocking inappropriate prompts.\nFID score calculated for batch evaluation.",
      vivaQuestions: [
        "What is FID and how is it calculated?",
        "How does Gradio help deploy ML models?",
        "Why are safety filters important in generative AI?",
        "What does a lower FID score indicate?",
      ],
      resources: ["Gradio Documentation", "FID Score Paper", "Stable Diffusion Safety Guide"],
    },
  ],

  // ─── PROJECTS ─────────────────────────────────────────────────

  projects: [
    {
      id: "project-1",
      title: "Custom Text-to-Image Generator with Stable Diffusion",
      difficulty: "Advanced",
      description: "Build a full text-to-image generation application using Stable Diffusion with custom fine-tuning on a specific domain (e.g., architectural designs, fashion, or artwork styles).",
      objective: "Create a domain-specific image generator that produces high-quality images tailored to a particular style or category.",
      technologies: ["Python", "Diffusers", "PyTorch", "LoRA", "Gradio", "Hugging Face Hub"],
      implementationSteps: [
        "Collect a domain-specific image dataset (100+ images)",
        "Set up Stable Diffusion fine-tuning with DreamBooth or LoRA",
        "Fine-tune the model on your custom dataset",
        "Evaluate generated images using FID and visual inspection",
        "Build a Gradio interface with prompt suggestions",
        "Add safety filters and negative prompt support",
        "Deploy the application and document results",
      ],
      expectedOutcome: "A specialized image generator that creates high-quality domain-specific images from text prompts, deployed as an interactive web application.",
      futureScope: ["Multi-style generation", "Image editing capabilities", "Mobile deployment", "Real-time generation optimization"],
      resources: ["DreamBooth Paper", "LoRA Fine-Tuning Guide", "Hugging Face Diffusers"],
    },
    {
      id: "project-2",
      title: "AI-Powered Study Assistant Chatbot",
      difficulty: "Intermediate",
      description: "Build a RAG-based chatbot that answers questions using course materials, lecture notes, and textbooks as the knowledge base.",
      objective: "Create an intelligent study assistant that retrieves relevant information from course documents and generates accurate, contextual answers.",
      technologies: ["Python", "LangChain", "FAISS", "Transformers", "Gradio", "PyPDF"],
      implementationSteps: [
        "Collect and preprocess course materials (PDFs, notes, slides)",
        "Split documents into chunks and create embeddings",
        "Build a FAISS vector store for semantic search",
        "Set up a retrieval chain with LangChain",
        "Integrate with an LLM for answer generation",
        "Build a chat interface with Gradio",
        "Add source citations in responses",
        "Test with diverse student questions",
      ],
      expectedOutcome: "A chatbot that accurately answers course-related questions by retrieving relevant content from the knowledge base and generating clear explanations.",
      futureScope: ["Voice input support", "Multi-course knowledge base", "Exam preparation mode", "Integration with university LMS"],
      resources: ["LangChain RAG Tutorial", "FAISS Documentation", "Hugging Face Embeddings"],
    },
    {
      id: "project-3",
      title: "GAN-Based Data Augmentation for Image Classification",
      difficulty: "Intermediate",
      description: "Use GANs to generate synthetic training data for an image classification task, demonstrating how generative models can improve classification performance on small datasets.",
      objective: "Train a GAN to generate realistic augmented data and show measurable improvement in downstream classification accuracy.",
      technologies: ["Python", "PyTorch", "DCGAN", "Scikit-learn", "Matplotlib", "Torchvision"],
      implementationSteps: [
        "Select a small image classification dataset",
        "Train a DCGAN on the dataset",
        "Generate synthetic images using the trained generator",
        "Evaluate quality of generated images (visual + FID)",
        "Train classifier on original data only (baseline)",
        "Train classifier on original + synthetic data (augmented)",
        "Compare classification accuracy between both approaches",
        "Analyze which classes benefit most from augmentation",
      ],
      expectedOutcome: "Demonstrable improvement in classification accuracy (5-15%) when using GAN-augmented training data compared to the original dataset alone.",
      futureScope: ["Conditional GAN for class-specific generation", "Progressive growing for higher resolution", "Apply to medical imaging datasets", "Compare with traditional augmentation"],
      resources: ["DCGAN Paper", "Data Augmentation Survey", "PyTorch Image Classification Tutorial"],
    },
    {
      id: "project-4",
      title: "Prompt Engineering Toolkit",
      difficulty: "Beginner",
      description: "Build an interactive toolkit that helps users experiment with different prompt engineering techniques and compare their effectiveness across various LLMs.",
      objective: "Create a web application where users can test basic, CoT, role-based, and few-shot prompting techniques side by side.",
      technologies: ["Python", "Gradio", "Transformers", "Hugging Face Hub"],
      implementationSteps: [
        "Design the toolkit interface with multiple prompt input fields",
        "Integrate multiple LLMs (GPT-2, DistilGPT-2, etc.)",
        "Implement prompt templates for each technique (basic, CoT, role-based)",
        "Add side-by-side comparison view for outputs",
        "Implement manual evaluation scoring (1-5 scale)",
        "Add prompt history and favorites",
        "Build a Gradio dashboard with tabs for each technique",
      ],
      expectedOutcome: "An interactive web toolkit that clearly demonstrates the effectiveness of different prompt engineering techniques across multiple models.",
      futureScope: ["Automated evaluation metrics", "Prompt optimization suggestions", "API integration with commercial LLMs", "Prompt sharing community"],
      resources: ["Prompt Engineering Guide", "Gradio Blocks Documentation"],
    },
    {
      id: "project-5",
      title: "Multimodal Content Generator",
      difficulty: "Advanced",
      description: "Build a system that generates both text and images for content creation — given a topic, it produces an article with AI-generated illustrations.",
      objective: "Create an end-to-end content pipeline that combines LLM text generation with diffusion model image generation.",
      technologies: ["Python", "Transformers", "Diffusers", "LangChain", "Gradio", "Pillow"],
      implementationSteps: [
        "Design the content generation pipeline architecture",
        "Implement text generation for articles/blogs using an LLM",
        "Extract key visual concepts from generated text",
        "Generate illustrations using Stable Diffusion for each concept",
        "Combine text and images into a formatted output",
        "Add style controls (formal, casual, academic)",
        "Build an interactive Gradio interface",
        "Add export to PDF/HTML functionality",
      ],
      expectedOutcome: "A content generation system that produces coherent articles with relevant AI-generated illustrations, exported as formatted documents.",
      futureScope: ["Video generation integration", "Multi-language support", "Brand-specific styling", "Social media format exports"],
      resources: ["Stable Diffusion Pipeline Guide", "LangChain Text Generation", "Pillow Image Processing"],
    },
  ],

  // ─── BOOKS (from syllabus) ────────────────────────────────────

  books: [
    {
      id: "book-1",
      title: "Generative Deep Learning",
      author: "David Foster",
      edition: "2nd Edition",
      description: "A comprehensive guide to building generative models including VAEs, GANs, transformers, and diffusion models with practical implementations.",
      coverColor: "#2563eb",
      url: "https://www.oreilly.com/library/view/generative-deep-learning/9781098134181/",
    },
    {
      id: "book-2",
      title: "Prompt Engineering for Generative AI",
      author: "James Phoenix, Mike Taylor",
      edition: "1st Edition",
      description: "Practical techniques for crafting effective prompts for LLMs and generative AI systems, published by O'Reilly Media.",
      coverColor: "#7c3aed",
      url: "#",
    },
    {
      id: "book-3",
      title: "Generative AI Essentials: Unlocking Creativity and Innovation with Generative AI",
      author: "Dr. Priyanka Singh, Hariom Singh",
      edition: "1st Edition",
      description: "Covers essential concepts of generative AI, from fundamentals to practical applications in creativity and innovation.",
      coverColor: "#059669",
      url: "#",
    },
    {
      id: "book-4",
      title: "Artificial Intelligence: A Modern Approach",
      author: "Stuart Russell, Peter Norvig",
      edition: "4th Edition",
      description: "The definitive textbook on artificial intelligence covering search, knowledge, reasoning, planning, learning, and perception.",
      coverColor: "#dc2626",
      url: "#",
    },
    {
      id: "book-5",
      title: "Introduction To Artificial Intelligence and Expert Systems",
      author: "Dan W. Patterson",
      edition: "1st Edition",
      description: "Covers foundations of AI and expert systems from PHI Publications.",
      coverColor: "#d97706",
      url: "#",
    },
    {
      id: "book-6",
      title: "Transformers for Natural Language Processing",
      author: "Denis Rothman",
      edition: "1st Edition (2021)",
      description: "Practical guide to transformer architectures for NLP tasks, published by Packt Publishing.",
      coverColor: "#0891b2",
      url: "#",
    },
  ],

  // ─── PUBLICATIONS ─────────────────────────────────────────────

  publications: [
    {
      id: "pub-1",
      title: "Attention Is All You Need",
      authors: "Vaswani, Shazeer, Parmar, Uszkoreit, Jones, Gomez, Kaiser, Polosukhin",
      year: 2017,
      topic: "Transformer Architecture",
      abstract: "Introduces the Transformer model, which relies entirely on self-attention mechanisms, dispensing with recurrence and convolutions.",
      url: "https://arxiv.org/abs/1706.03762",
    },
    {
      id: "pub-2",
      title: "Generative Adversarial Networks",
      authors: "Ian J. Goodfellow et al.",
      year: 2014,
      topic: "GANs",
      abstract: "Introduces the GAN framework — training generative models through an adversarial process between a generator and discriminator.",
      url: "https://arxiv.org/abs/1406.2661",
    },
    {
      id: "pub-3",
      title: "Auto-Encoding Variational Bayes",
      authors: "Diederik P. Kingma, Max Welling",
      year: 2014,
      topic: "Variational Autoencoders",
      abstract: "Introduces the VAE framework for learning latent representations using variational inference and the reparameterization trick.",
      url: "https://arxiv.org/abs/1312.6114",
    },
    {
      id: "pub-4",
      title: "Denoising Diffusion Probabilistic Models",
      authors: "Jonathan Ho, Ajay Jain, Pieter Abbeel",
      year: 2020,
      topic: "Diffusion Models",
      abstract: "Presents diffusion probabilistic models that produce high-quality image samples by learning to reverse a gradual noising process.",
      url: "https://arxiv.org/abs/2006.11239",
    },
    {
      id: "pub-5",
      title: "LoRA: Low-Rank Adaptation of Large Language Models",
      authors: "Edward J. Hu, Yelong Shen, Phillip Wallis, Zeyuan Allen-Zhu, Yuanzhi Li, Shean Wang, Lu Wang, Weizhu Chen",
      year: 2021,
      topic: "Parameter-Efficient Fine-Tuning",
      abstract: "Proposes LoRA, a method that freezes pre-trained model weights and injects trainable low-rank matrices, reducing trainable parameters by 10,000x.",
      url: "https://arxiv.org/abs/2106.09685",
    },
    {
      id: "pub-6",
      title: "High-Resolution Image Synthesis with Latent Diffusion Models",
      authors: "Robin Rombach, Andreas Blattmann, Dominik Lorenz, Patrick Esser, Björn Ommer",
      year: 2022,
      topic: "Stable Diffusion",
      abstract: "Introduces Latent Diffusion Models (Stable Diffusion) that apply diffusion in a compressed latent space for efficient high-resolution image generation.",
      url: "https://arxiv.org/abs/2112.10752",
    },
  ],

  // ─── VIDEO RESOURCES ──────────────────────────────────────────

  videoResources: [
    {
      id: "vid-genai",
      title: "Generative AI — Complete Overview",
      topic: "Introduction to Generative AI",
      duration: "Course Video",
      url: "https://youtu.be/NRmAXDWJVnU?si=byRMGl6nLeZ4HU1J",
      platform: "YouTube — Course Recommended",
    },
    {
      id: "vid-llm",
      title: "Large Language Models Explained",
      topic: "LLMs",
      duration: "Course Video",
      url: "https://youtu.be/bZxAKA69xqg?si=8nbMMPs4FAziuaMe",
      platform: "YouTube — Course Recommended",
    },
    {
      id: "vid-gan",
      title: "Generative Adversarial Networks (GANs)",
      topic: "GANs",
      duration: "Course Video",
      url: "https://youtu.be/MZmNxvLDdV0?si=QLgAi65F2ZZeti24",
      platform: "YouTube — Course Recommended",
    },
    {
      id: "vid-vae",
      title: "Variational Autoencoders (VAEs) Explained",
      topic: "VAEs",
      duration: "Course Video",
      url: "https://youtu.be/fcvYpzHmhvA?si=jmSralk54Cvoslo9",
      platform: "YouTube — Course Recommended",
    },
    {
      id: "vid-gan-types",
      title: "Types of GANs — WGAN, StyleGAN, CycleGAN & More",
      topic: "GAN Variants",
      duration: "Course Video",
      url: "https://youtu.be/yxv0_tFPyxs?si=3xORdllEdcCEM9Jy",
      platform: "YouTube — Course Recommended",
    },
    {
      id: "vid-1",
      title: "Generative AI Full Course",
      topic: "Complete GenAI Overview",
      duration: "5 hours",
      url: "https://www.youtube.com/watch?v=mEsleV16qdo",
      platform: "YouTube — freeCodeCamp",
    },
    {
      id: "vid-2",
      title: "What are Diffusion Models?",
      topic: "Diffusion Models",
      duration: "15 min",
      url: "https://www.youtube.com/watch?v=fbLgFrlTnGU",
      platform: "YouTube — Computerphile",
    },
    {
      id: "vid-5",
      title: "Prompt Engineering for ChatGPT",
      topic: "Prompt Engineering",
      duration: "Full Course",
      url: "https://www.coursera.org/learn/prompt-engineering",
      platform: "Coursera — Vanderbilt",
    },
    {
      id: "vid-6",
      title: "LangChain Crash Course",
      topic: "LangChain Framework",
      duration: "1 hour",
      url: "https://www.youtube.com/watch?v=lG7Uxts9SXs",
      platform: "YouTube",
    },
    {
      id: "vid-7",
      title: "LoRA Fine-Tuning Tutorial",
      topic: "LLM Fine-Tuning",
      duration: "30 min",
      url: "https://www.youtube.com/watch?v=YVU5wAA6Txo",
      platform: "YouTube",
    },
  ],

  // ─── EXTERNAL LINKS ───────────────────────────────────────────

  externalLinks: [
    {
      id: "link-1",
      title: "Hugging Face",
      description: "Pre-trained models, datasets, and model hub for GenAI",
      url: "https://huggingface.co/",
      icon: "smile",
    },
    {
      id: "link-2",
      title: "Google Colab",
      description: "Free cloud-based Jupyter notebooks with GPU support",
      url: "https://colab.research.google.com/",
      icon: "cloud",
    },
    {
      id: "link-3",
      title: "LangChain Documentation",
      description: "Framework for building LLM-powered applications",
      url: "https://python.langchain.com/docs/",
      icon: "link",
    },
    {
      id: "link-4",
      title: "Diffusers Documentation",
      description: "Hugging Face library for diffusion models",
      url: "https://huggingface.co/docs/diffusers/",
      icon: "image",
    },
    {
      id: "link-5",
      title: "Gradio Documentation",
      description: "Build and deploy ML web apps quickly",
      url: "https://www.gradio.app/docs/",
      icon: "layout",
    },
    {
      id: "link-6",
      title: "Papers With Code",
      description: "ML papers with implementation code and benchmarks",
      url: "https://paperswithcode.com/",
      icon: "file-text",
    },
  ],

  // ─── COLLABORATION LINKS ──────────────────────────────────────

  collaborationLinks: [
    {
      id: "collab-1",
      title: "GitHub Repository",
      description: "Course lab notebooks, code, and project templates",
      icon: "github",
      url: "https://github.com/ram-mittal/FGAI",
      platform: "GitHub",
    },
    {
      id: "collab-2",
      title: "Google Drive",
      description: "Shared lecture materials, slides, and lab manuals",
      icon: "hard-drive",
      url: "https://drive.google.com/",
      platform: "Google Drive",
    },
    {
      id: "collab-3",
      title: "Google Colab Workspace",
      description: "Interactive lab notebooks with free GPU access",
      icon: "cloud",
      url: "https://colab.research.google.com/",
      platform: "Google Colab",
    },
    {
      id: "collab-4",
      title: "Discussion Forum",
      description: "Ask questions, discuss labs, and collaborate with peers",
      icon: "message-circle",
      url: "#",
      platform: "Discussion Group",
    },
    {
      id: "collab-5",
      title: "Hugging Face Hub",
      description: "Shared models, datasets, and spaces for the course",
      icon: "smile",
      url: "https://huggingface.co/",
      platform: "Hugging Face",
    },
  ],
};

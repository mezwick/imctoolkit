#!/usr/bin/env python
from setuptools import find_packages, setup
from os import path

this_directory = path.abspath(path.dirname(__file__))
with open(path.join(this_directory, 'README.md'), encoding='utf-8') as f:
    long_description = f.read()

install_requires = []
with open(path.join(this_directory, 'requirements.txt'), encoding='utf-8') as f:
    for line in f:
        line = line.strip()
        if not line.startswith('#'):
            install_requires.append(line)

setup(
    name='imctoolkit',
    use_scm_version={'write_to': "imctoolkit/_version.py"},
    description='Python package for processing segmented multi-channel images',
    long_description=long_description,
    long_description_content_type='text/markdown',
    author='Jonas Windhager',
    author_email='jonas.windhager@uzh.ch',
    url='https://github.com/BodenmillerGroup/imctoolkit',
    packages=find_packages(),
    classifiers=[
        'Intended Audience :: Science/Research',
        'License :: OSI Approved :: MIT License',
        'Natural Language :: English',
        'Operating System :: OS Independent',
        'Programming Language :: Python :: 3.8',
        'Programming Language :: Python :: 3.9',
        'Topic :: Scientific/Engineering :: Bio-Informatics',
        'Topic :: Scientific/Engineering :: Image Processing',
    ],
    license='MIT',
    python_requires='>=3.8',
    install_requires=install_requires,
    setup_requires=['setuptools_scm'],
    extras_require={
        'all': ['anndata', 'fcswrite', 'networkx', 'opencv-python', 'python-igraph'],
    },
)

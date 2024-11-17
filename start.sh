#!/bin/sh

tmux new-session -d -s envision 'exec python3 server.py'
tmux rename-window 'envision'
tmux select-window -t envision:0
tmux split-window -h 'cd client && exec npm start'
tmux attach -t envision